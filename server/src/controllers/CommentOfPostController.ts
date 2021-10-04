import { NextFunction, Request, Response } from 'express';
import { HTTP_CODE } from '../enums/HTTP_CODE';
import Exception from '../exceptions/Exception';
import ServerErrorException from '../exceptions/ServerErrorException';
import { responseSuccess } from '../ServerResponse';
import * as CommentOfPostService from '../services/CommentOfPostService';
import * as PostService from '../services/PostService';
import * as NotificationService from '../services/NotificationService';
import * as UserService from '../services/UserService';
import { commentNotification } from '../templates/NotificationTemplates';

export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const postId = req.params.postId;
  const userId = req.userId;
  try {
    const user = await UserService.findUserById(userId);
    const post = await PostService.findPostById(postId);
    if (post && user) {
      const newComment = await CommentOfPostService.save({
        ...req.body,
        post: postId,
        user: userId,
      });
      post.comments.push(newComment._id as string);

      const updatedPost = await post.save();

      await NotificationService.save({
        content: `${commentNotification(user.username, req.body.content)}`,
        post: postId,
        sender: userId,
        receiver: post.user,
        type: 'comment',
      });

      res.status(200).send(updatedPost);
    } else {
      next(new Exception(HTTP_CODE.NOT_FOUND, 'post not found'));
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const updateComment = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const data = req.body;
  try {
    const result = await CommentOfPostService.findByIdAndUpdate(
      req.params.commentId,
      data,
    );
    return responseSuccess(res, HTTP_CODE.OK, result);
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};

export const deleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const result = await CommentOfPostService.findByIdAndDelete(
      req.params.commentId,
    );
    if (result) {
      res.status(200).send('deleted');
    } else {
      next(new Exception(HTTP_CODE.NOT_FOUND, 'post not found'));
    }
  } catch (err) {
    console.log(err);
    next(new ServerErrorException());
  }
};
