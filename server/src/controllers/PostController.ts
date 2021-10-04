import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import { HTTP_CODE } from '../enums/HTTP_CODE';
import Exception from '../exceptions/Exception';
import ServerErrorException from '../exceptions/ServerErrorException';
import { responseSuccess } from '../ServerResponse';
import * as PostService from '../services/PostService';
import { uploadToCloudinary } from '../utils/FileUploader';
import * as UserService from '../services/UserService';
import fs from 'fs';

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const userId = req.userId;
  const imageFile = req.files?.imageFile as UploadedFile;
  const { description } = req.body;
  try {
    if (imageFile) {
      const uploadResult = await uploadToCloudinary(imageFile, false);
      if (uploadResult) {
        const newPost = await PostService.save({
          ...req.body,
          imageURL: uploadResult?.secure_url,
          description,
          user: userId,
        });
        fs.unlinkSync(imageFile.tempFilePath);
        return responseSuccess(res, HTTP_CODE.CREATED, newPost);
      }
    } else {
      next(new Exception(HTTP_CODE.BAD_REQUEST, 'image file is required'));
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const getPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const posts = await PostService.findPosts();
    return responseSuccess(res, HTTP_CODE.OK, posts);
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const getPostsByUsername = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { username } = req.params;
  try {
    const user = await UserService.findUserByUsernameOrEmail(username);
    if (user) {
      const posts = await PostService.findPostByUserId(user._id as string);
      return responseSuccess(res, HTTP_CODE.OK, posts);
    } else {
      res.status(400).send('user not found');
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const postId = req.params.postId;
  try {
    const data = req.body;
    const result = await PostService.findPostByIdAndUpdate(postId, { ...data });
    if (result) {
      return responseSuccess(res, HTTP_CODE.OK, result);
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const postId = req.params.postId;
  try {
    await PostService.findPostByIdAndDelete(postId);
    res.status(200).send('post deleted');
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};
