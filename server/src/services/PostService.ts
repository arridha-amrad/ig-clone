import { Schema, Document } from 'mongoose';
import PostModel, { IPostModel } from '../models/PostModel';

type MongoDBPostModel =
  // eslint-disable-next-line
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
  const res = PostModel.find({}, null, { sort: '-createdAt' })
    .populate('user', 'username imageURL')
    .populate({
      path: 'comments',
      populate: [
        {
          path: 'user',
          select: 'username imageURL updatedAt'
        },
        {
          path: 'comments',
          select: 'content likes createdAt',
          populate: (
            {
              path: 'user',
              select: 'username imageURL'
            }
          )
        }
      ]
    });
  return res;
};

export const findPostsByUserId = async (
  userId: string,
): Promise<IPostModel[]> => {
  return PostModel.find({ user: userId }, null, { sort: '-createdAt' })
    .populate('likes', 'username imageURL')
    .populate({
      path: 'comments',
      populate: {
        path: 'user',
        select: 'username imageURL updatedAt'
      },
      select: '-post'
    })
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
