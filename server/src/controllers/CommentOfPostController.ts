import { NextFunction, Request, Response } from 'express';
import { HTTP_CODE } from '../enums/HTTP_CODE';
import Exception from '../exceptions/Exception';
import ServerErrorException from '../exceptions/ServerErrorException';
import { responseSuccess } from '../ServerResponse';
import * as CommentOfPostService from '../services/CommentOfPostService';
import * as PostService from '../services/PostService';

export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const postId = req.params.postId;
  try {
    const post = await PostService.findPostById(postId);
    if (post) {
      const newComment = await CommentOfPostService.save({
        ...req.body,
        post: postId,
        user: req.userId,
      });
      post.comments.push(newComment._id);
      const updatedPost = await post.save();
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
