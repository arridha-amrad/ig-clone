import { NextFunction, Request, Response } from 'express';
import { HTTP_CODE } from '../enums/HTTP_CODE';
import { responseSuccess } from '../ServerResponse';
import ServerErrorException from '../exceptions/ServerErrorException';
import * as UserService from '../services/UserService';
import argon2 from 'argon2';
import { authenticatedUserDataMapper } from '../utils/mapper';
import Exception from '../exceptions/Exception';
import { uploadToCloudinary } from '../utils/FileUploader';
import { UploadedFile } from 'express-fileupload';
import fs from 'fs';
import * as PostService from "../services/PostService"
import { IUserModel } from '../models/UserModel';

export const findUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { username } = req.params
  try {
    const users = await UserService.findUsernameLike(username)
    res.status(200).send(users)
  } catch (err) {
    console.log(err)
    next(new ServerErrorException())
  }
}

export const findUserAndPostsByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await UserService.findUserByUsernameOrEmail(
      req.params.username,
    );
    if (user) {
      const posts = await PostService.findPostsByUserId(user._id as string)
      const userData = authenticatedUserDataMapper(user);
      const result = { ...userData, posts }
      return responseSuccess(res, HTTP_CODE.OK, result);
    } else {
      next(new Exception(HTTP_CODE.NOT_FOUND, "user not found"))
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const me = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await UserService.findUserById(req.userId);
    if (user) {
      const data = authenticatedUserDataMapper(user);
      res.status(200).send(data)
    } else {
      next(new Exception(HTTP_CODE.NOT_FOUND, "user not found"))
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const updateUserData = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data = req.body as Partial<IUserModel>
    const updateResult = await UserService.findUserByIdAndUpdate(
      req.userId,
      data,
    );
    if (updateResult) {
      const result = authenticatedUserDataMapper(updateResult);
      res.status(200).send(result)
    }
    // eslint-disable-next-line
  } catch (err: any) {
    console.log(err);
    if (err.keyPattern.username > 0) {
      next(new Exception(HTTP_CODE.BAD_REQUEST, "username has been used by another user"))
    }
    next(new ServerErrorException());
  }
};

export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await UserService.findUserById(req.userId);
    if (user) {
      const isMatch = await argon2.verify(user.password ?? '', oldPassword);
      if (isMatch) {
        const newHashedPassword = await argon2.hash(newPassword);
        await UserService.findUserByIdAndUpdate(
          req.userId,
          { password: newHashedPassword },
        );
        res.status(200).send("password changed")
      } else {
        return next(new Exception(HTTP_CODE.BAD_REQUEST, 'wrong password'));
      }
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const uploadAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId = req.userId;
    const file = req.files?.avatarFile as UploadedFile;
    if (!file) {
      return next(new Exception(HTTP_CODE.BAD_REQUEST, 'image is required'));
    }
    if (file.size >= 1000000) {
      return next(new Exception(HTTP_CODE.BAD_REQUEST, 'file is too large'));
    }
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg'
    ) {
      const uploadResult = await uploadToCloudinary(file, true);
      if (uploadResult) {
        await UserService.findUserByIdAndUpdate(userId, {
          imageURL: uploadResult.secure_url,
        });
        res.status(200).send(uploadResult?.secure_url);
      }
    } else {
      fs.unlinkSync(file.tempFilePath);
      return next(new Exception(HTTP_CODE.BAD_REQUEST, 'file not supported'));
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};
