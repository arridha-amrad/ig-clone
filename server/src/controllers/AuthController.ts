import { NextFunction, Request, Response } from 'express';
import { AuthenticationStrategy, RequiredAuthAction } from '../enums/UserEnum';
import { v4 } from 'uuid';
import argon2 from 'argon2';
import sendEmail from '../services/MailService';
import {
  emailConfirmation,
  resetPasswordRequest,
  VerificationEmailContent,
} from '../templates/MailTemplates';
import * as JwtService from '../services/JwtService';
import * as msg from '../templates/NotificationTemplates';
import {
  responseSuccess,
  responseWithCookie,
  responseWithCookieOnly,
} from '../ServerResponse';
import { HTTP_CODE } from '../enums/HTTP_CODE';
import * as Validator from '../validators/AuthValidator';
// import { OAuth2Client, TokenPayload } from 'google-auth-library';
import * as UserServices from '../services/UserService';
import { BadRequestException } from '../exceptions/BadRequestException';
import Exception from '../exceptions/Exception';
import ServerErrorException from '../exceptions/ServerErrorException';

import * as redis from '../database/redisClient';

import { decrypt, encrypt } from '../utils/Encrypt';
import { LoginRequest, RegisterRequest } from '../dto/AuthData';
import { generateNumber } from '../utils/RandomNumberGenerator';
import * as VerificationServices from '../services/VerificationService';
import { IVerificationModel } from '../models/VerificationModel';
import { authenticatedUserDataMapper } from '../utils/mapper';

export const isExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const result = await UserServices.findUserByUsernameOrEmail(req.body.data);
    if (result) {
      res.status(200).send('not-available');
    } else {
      res.status(200).send('ok');
    }
  } catch (error) {
    console.log('err', error);
    next(new ServerErrorException());
  }
};

export const registerHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { email, username, password }: RegisterRequest = req.body;
  const { errors, valid } = Validator.registerValidator({
    email,
    password,
    username,
  });
  if (!valid) next(new BadRequestException(errors));
  try {
    const savedUser = await UserServices.save({
      ...req.body,
      strategy: AuthenticationStrategy.default,
      requiredAuthAction: RequiredAuthAction.emailVerification,
    });
    // Create a unique verification code
    // if the code already exists, looping run -> generate new code & check if it is exists
    let verificationCode: string;
    let isLoop = true;
    do {
      verificationCode = generateNumber(6);
      const isCodeExists = await VerificationServices.findCodeAndNotComplete(
        verificationCode,
      );
      if (isCodeExists) {
        isLoop = true;
      } else {
        isLoop = false;
      }
    } while (isLoop);

    const verificationData: IVerificationModel = {
      code: verificationCode,
      email,
      user: savedUser._id,
    };
    await VerificationServices.save(verificationData);
    const emailContent: VerificationEmailContent = {
      username,
      email,
      code: verificationCode,
    };
    await sendEmail(savedUser.email, emailConfirmation(emailContent));
    return responseSuccess(
      res,
      HTTP_CODE.CREATED,
      msg.registerSuccess(savedUser.email),
    );
  } catch (err) {
    console.error(err);
    return next(new ServerErrorException());
  }
};

export const emailVerificationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { verificationCode, email } = req.body;
  try {
    const verification = await VerificationServices.findCodeAndUpdate(
      verificationCode,
      email,
    );
    if (verification) {
      const user = await UserServices.findUserByIdAndUpdate(verification.user, {
        isVerified: true,
        isActive: true,
        jwtVersion: v4(),
        requiredAuthAction: RequiredAuthAction.null,
      });
      if (user) {
        return responseSuccess(
          res,
          HTTP_CODE.OK,
          msg.emailVerified(user.username),
        );
      }
    } else {
      res.status(400).send('wrong code');
    }
  } catch (err) {
    console.log('email verification errors : ', err);
    return next(new ServerErrorException());
  }
};

export const loginHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { identity, password }: LoginRequest = req.body;
  const { valid, errors } = Validator.loginValidator({
    identity,
    password,
  });
  if (!valid) {
    return next(new BadRequestException(errors));
  }
  try {
    const user = await UserServices.findUserByUsernameOrEmail(identity);
    if (!user) {
      return next(new Exception(HTTP_CODE.NOT_FOUND, 'user not found'));
    }
    if (!user.isVerified) {
      return next(new Exception(HTTP_CODE.FORBIDDEN, msg.emailNotVerified));
    }
    const isMatch = await argon2.verify(user.password ?? '', password);
    if (!isMatch) {
      return next(new Exception(HTTP_CODE.FORBIDDEN, msg.invalidPassword));
    }
    await UserServices.findUserByIdAndUpdate(user._id, { isLogin: true });
    const accessToken = await JwtService.signAccessToken(user);
    const refreshToken = await JwtService.signRefreshToken(user);
    if (accessToken && refreshToken) {
      const encryptedAccessToken = encrypt(accessToken);
      const encryptedRefreshToken = encrypt(refreshToken);
      // store refreshToken to redis
      await redis.set(`${user._id}_refToken`, encryptedRefreshToken);
      const data = authenticatedUserDataMapper(user);
      return responseWithCookie(res, encryptedAccessToken, data);
    }
  } catch (err) {
    console.log(err);
    return next(new ServerErrorException());
  }
};

export const logoutHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // verify the token first
    const userId = req.cookies.COOKIE_ID;
    if (userId) {
      // update user credential
      await UserServices.findUserByIdAndUpdate(req.userId, {
        isLogin: false,
      });
      await redis.del(`${userId}_refToken`);
      // delete user's cookie
      res.clearCookie(process.env.COOKIE_NAME);
      res.clearCookie(process.env.COOKIE_ID);
      res.send('logout successfully');
    }
  } catch (error) {
    console.log(error);
    return next(new ServerErrorException());
  }
};

export const refreshTokenHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const cookieId = req.cookies.COOKIE_ID;
    const encryptedRefreshToken = await redis.get(`${cookieId}_refToken`);
    const bearerRefreshToken = decrypt(encryptedRefreshToken ?? '');
    const token = bearerRefreshToken.split(' ')[1];
    const payload = await JwtService.verifyRefreshToken(token);
    const user = await UserServices.findUserById(payload?.userId ?? '');
    if (user) {
      if (user.jwtVersion !== payload?.jwtVersion ?? '') {
        return next(
          new Exception(HTTP_CODE.METHOD_NOT_ALLOWED, 'expired jwt version'),
        );
      }
      const newAccessToken = await JwtService.signAccessToken(user);
      const newRefreshToken = await JwtService.signRefreshToken(user);
      // update cookie
      if (newAccessToken && newRefreshToken) {
        const newEncryptedAccessToken = encrypt(newAccessToken);
        const newEncryptedRefreshToken = encrypt(newRefreshToken);
        await redis.set(`${cookieId}_refToken`, newEncryptedRefreshToken);
        return responseWithCookieOnly(res, newEncryptedAccessToken);
      }
    }
  } catch (err) {
    console.log(err);
    return next(new ServerErrorException());
  }
};

export const forgotPasswordHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { email } = req.body;
  const { errors, valid } = Validator.forgotPasswordValidator(email);
  if (!valid) {
    return next(new BadRequestException(errors));
  }
  try {
    const user = await UserServices.findUserByUsernameOrEmail(email);
    if (!user) {
      return next(new Exception(HTTP_CODE.NOT_FOUND, msg.userNotFound));
    }
    if (!user.isVerified) {
      return next(new Exception(HTTP_CODE.FORBIDDEN, msg.emailNotVerified));
    }
    // update user credentials
    const updated = await UserServices.findUserByIdAndUpdate(user._id, {
      isLogin: false,
      requiredAuthAction: RequiredAuthAction.resetPassword,
    });
    if (updated) {
      const token = await JwtService.createEmailLinkToken(email);
      if (token) {
        const encryptedToken = encrypt(token).replaceAll('/', '_');
        await sendEmail(
          email,
          resetPasswordRequest(user.username, encryptedToken),
        );
        return responseSuccess(res, HTTP_CODE.OK, msg.forgotPassword(email));
      }
    }
  } catch (err) {
    console.log('forgotPassword : ', err);
    return next(new ServerErrorException());
  }
};

export const resetPasswordHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { password } = req.body;
  const { encryptedLinkToken } = req.params;
  const { errors, valid } = Validator.resetPasswordValidator(password);
  if (!valid) {
    return next(new BadRequestException(errors));
  }
  try {
    const token = decrypt(encryptedLinkToken.replaceAll('_', '/'));
    const payload = await JwtService.verifyTokenLink(token);
    const user = await UserServices.findUserByUsernameOrEmail(payload.email);
    if (user) {
      if (user.requiredAuthAction !== RequiredAuthAction.resetPassword) {
        return next(new Exception(HTTP_CODE.BAD_REQUEST, 'Action not granted'));
      }
      // update user's jwtVersion, password, requiredAuthAction
      await UserServices.findUserByIdAndUpdate(user._id, {
        jwtVersion: v4(),
        requiredAuthAction: RequiredAuthAction.null,
        password: await argon2.hash(password),
      });
      // return
      return responseSuccess(res, HTTP_CODE.OK, msg.resetPassword);
    }
  } catch (err) {
    console.log('confirmEmail errors : ', err);
    return next(new ServerErrorException());
  }
};

// export const googleAuth = async (req: Request, res: Response) => {
//    //! Set Google Client
//    const client = new OAuth2Client({
//       clientId: process.env.GOOGLE_OAUTH_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET!,
//       redirectUri: process.env.CLIENT_ORIGIN!,
//    });

//    try {
//       //! Get Login Ticket.
//       const googleResponse = await client.verifyIdToken({
//          idToken: req.body.tokenId,
//          audience: process.env.GOOGLE_OAUTH_CLIENT_ID!,
//       });

//       //! Get User email, name from his account.
//       const { email_verified, email, given_name } =
//          googleResponse.getPayload() as TokenPayload;

//       if (email_verified) {
//          //! If the email has been registered .
//          const isEmailRegistered = await User.find({
//             email,
//             $or: [
//                { strategy: Strategy.default },
//                { strategy: Strategy.facebook },
//             ],
//          });
//          if (isEmailRegistered.length > 0) {
//             return responseFailure(res, HTTP_CODE.BAD_REQUEST, {
//                generic: 'Email already registered with different account',
//             });
//          }
//          let user: IUser | null;
//          user = await User.findOne({ email, strategy: Strategy.google }).select(
//             '+jwtVersion'
//          );

//          // email is not registered yet
//          const randomNumber = Math.ceil(Math.random() * 10000);
//          if (!user) {
//             user = await User.create({
//                // email: email!,
//                strategy: Strategy.google,
//                username: given_name + randomNumber.toString(),
//                requiredAuthAction: RequiredAuthAction.null,
//                isActive: true,
//                isLogin: true,
//                isVerified: true,
//                password: 'google',
//                jwtVersion: v4(),
//             });
//          }
//          // Grab the jwtVersion.
//          const jwtVersion = user.jwtVersion;
//          user.isLogin = true;
//          await user.save();
//          if (!jwtVersion) {
//             return responseFailure(res, HTTP_CODE.FORBIDDEN, {
//                generic: msg.userNotFound,
//             });
//          }
//          // Sign Access Token and Refresh Token .
//          const accessToken = 'Bearer ' + (await signAccessToken(user.id));
//          const refreshToken =
//             'Bearer ' + (await signRefreshToken(user.id, jwtVersion));
//          // return with create cookie
//          return responseWithCookie(res, refreshToken, accessToken);
//       }
//    } catch (err) {
//       console.log(err);
//       return serverError(res);
//    }
// };
