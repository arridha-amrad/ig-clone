import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import { HTTP_CODE } from '../enums/HTTP_CODE';
import Exception from '../exceptions/Exception';
import ServerErrorException from '../exceptions/ServerErrorException';
import * as PostService from '../services/PostService';
import { uploadToCloudinary } from '../utils/FileUploader';
import * as UserService from '../services/UserService';
import fs from 'fs';
import * as NotificationService from '../services/NotificationService';
import { likedPostNotification } from '../templates/NotificationTemplates';

export const getPostById = async (
   req: Request,
   res: Response,
   next: NextFunction,
): Promise<void> => {
   try {
      const result = await PostService.getPost(req.params.postId);
      res.status(200).send(result);
   } catch (err) {
      console.log(err);
      next(new ServerErrorException());
   }
};

export const likePost = async (
   req: Request,
   res: Response,
   next: NextFunction,
): Promise<void> => {
   const userId = req.userId;
   const postId = req.params.postId;
   try {
      const post = await PostService.findPostById(postId);
      const sender = await UserService.findUserById(userId);
      if (post && sender) {
         const isLiked = post.likes.includes(userId);
         if (isLiked) {
            post.likes = post.likes.filter((like) => like !== userId);
            await NotificationService.removeNotificationOfLikedPost(
               post.user,
               userId,
               post.id,
            );
         } else {
            post.likes.push(userId);
            await NotificationService.createNotificationOfLikedPost(
               post.user,
               userId,
               post.id,
               likedPostNotification(sender.username),
            );
         }
         const updatedPost = await post.save();
         res.status(200).send(updatedPost);
      }
   } catch (err) {
      console.log(err);
      next(new ServerErrorException());
   }
};

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
         if (imageFile.size >= 2000000) {
            next(new Exception(HTTP_CODE.BAD_REQUEST, 'file too large'));
         }
         const uploadResult = await uploadToCloudinary(imageFile, false);
         if (uploadResult) {
            const newPost = await PostService.save({
               ...req.body,
               imageURL: uploadResult?.secure_url,
               description,
               user: userId,
            });
            fs.unlinkSync(imageFile.tempFilePath);
            res.status(200).send(newPost);
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
      res.status(200).send(posts);
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
         const posts = await PostService.findPostsByUserId(user._id as string);
         res.status(200).send(posts);
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
      const result = await PostService.findPostByIdAndUpdate(postId, {
         ...data,
      });
      if (result) {
         res.status(200).send(result);
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
