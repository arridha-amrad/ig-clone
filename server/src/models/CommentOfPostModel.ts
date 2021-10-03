import mongoose from 'mongoose';

export interface ICommentOfPostModel {
  _id: mongoose.Schema.Types.ObjectId | string;
  user: string;
  likes: [string];
  comments: [string];
  post: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export const CommentOfPostSchema = new mongoose.Schema<
  ICommentOfPostModel,
  mongoose.Model<ICommentOfPostModel>,
  ICommentOfPostModel
>(
  {
    user: {
      type: String,
      ref: 'User',
    },
    post: {
      type: String,
      ref: 'Post',
    },
    likes: [
      {
        type: String,
        ref: 'User',
        default: [],
      },
    ],
    comments: [
      {
        type: String,
        ref: 'CommentOfComment',
        default: [],
      },
    ],
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const CommentOfPostModel = mongoose.model<ICommentOfPostModel>(
  'CommentOfPost',
  CommentOfPostSchema,
);

export default CommentOfPostModel;
