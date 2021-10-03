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

export const findUserByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await UserService.findUserAndPostsByUsername(
      req.params.username,
    );
    if (user) {
      const data = authenticatedUserDataMapper(user);
      return responseSuccess(res, HTTP_CODE.OK, { ...data });
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
      return responseSuccess(res, HTTP_CODE.OK, data);
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
    const updateResult = await UserService.findUserByIdAndUpdate(
      req.cookies.COOKIE_ID,
      { ...req.body },
    );
    if (updateResult) {
      const data = authenticatedUserDataMapper(updateResult);
      return responseSuccess(res, HTTP_CODE.OK, data);
    }
  } catch (err) {
    console.log(err);
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
    const user = await UserService.findUserById(req.cookies.COOKIE_ID);
    if (user) {
      const isMatch = await argon2.verify(user.password ?? '', oldPassword);
      if (isMatch) {
        const newHashedPassword = await argon2.hash(newPassword);
        const result = await UserService.findUserByIdAndUpdate(
          req.cookies.COOKIE_ID,
          { password: newHashedPassword },
        );
        if (result) {
          return responseSuccess(res, HTTP_CODE.OK, 'password changed');
        }
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
      return next(new Exception(HTTP_CODE.BAD_REQUEST, 'file not supported'));
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};
