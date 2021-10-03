import mongoose from 'mongoose';

export interface ICommentOfCommentModel {
  _id: mongoose.Schema.Types.ObjectId | string;
  user: string;
  likes: [string];
  comment: string;
  post: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
}

export const CommentOfCommentSchema = new mongoose.Schema<
  ICommentOfCommentModel,
  mongoose.Model<ICommentOfCommentModel>,
  ICommentOfCommentModel
>(
  {
    user: {
      type: String,
      ref: 'User',
    },
    likes: [
      {
        type: String,
        ref: 'User',
        default: [],
      },
    ],
    comment: {
      type: String,
      ref: 'CommentOfPost',
    },
    post: {
      type: String,
      ref: 'Post',
    },
    content: { type: String },
  },
  { timestamps: true },
);

const CommentOfCommentModel = mongoose.model<ICommentOfCommentModel>(
  'CommentOfComment',
  CommentOfCommentSchema,
);
export default CommentOfCommentModel;
