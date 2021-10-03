import { Schema, Document } from 'mongoose';
import PostModel, { IPostModel } from '../models/PostModel';

type MongoDBPostModel =
  | (Document<any, any, IPostModel> &
      IPostModel & {
        _id: Schema.Types.ObjectId;
      })
  | null;

export const save = async (data: IPostModel): Promise<IPostModel> => {
  const newPost = new PostModel(data);
  return newPost.save();
};

export const findPosts = async (): Promise<IPostModel[]> => {
  const res = PostModel.find()
    .populate('user', 'username')
    .populate({
      path: 'comments',
      populate: { path: 'user', select: 'username' },
    });
  return res;
};

export const findPostByUserId = async (
  userId: Schema.Types.ObjectId,
): Promise<IPostModel[]> => {
  return PostModel.find({ user: userId })
    .populate('likes', 'username')
    .populate('comments');
};

export const findPostByIdAndUpdate = async (
  postId: string,
  updatedPostData: Partial<IPostModel>,
): Promise<IPostModel | null> => {
  return PostModel.findByIdAndUpdate(
    postId,
    {
      ...updatedPostData,
    },
    { new: true },
  );
};

export const findPostByIdAndDelete = async (
  postId: string,
): Promise<IPostModel | null> => {
  return PostModel.findByIdAndDelete(postId);
};

export const findPostById = async (
  postId: string,
): Promise<MongoDBPostModel> => {
  return PostModel.findById(postId);
};
