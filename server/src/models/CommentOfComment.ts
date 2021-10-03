import mongoose from 'mongoose';

export interface ICommentOfCommentModel {
  _id: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  likes: [mongoose.Schema.Types.ObjectId];
  comment: mongoose.Schema.Types.ObjectId;
  post: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  content: string;
}

const CommentOfCommentSchema = new mongoose.Schema<
  ICommentOfCommentModel,
  mongoose.Model<ICommentOfCommentModel>,
  ICommentOfCommentModel
>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: [],
      },
    ],
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CommentOfPost',
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
    content: { type: String },
  },
  { timestamps: true },
);
