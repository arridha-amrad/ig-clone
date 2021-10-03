import mongoose from 'mongoose';

export interface ICommentOfPostModel {
  _id: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  likes: [mongoose.Schema.Types.ObjectId];
  comments: [mongoose.Schema.Types.ObjectId];
  post: mongoose.Schema.Types.ObjectId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const CommentOfPostSchema = new mongoose.Schema<
  ICommentOfPostModel,
  mongoose.Model<ICommentOfPostModel>,
  ICommentOfPostModel
>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: [],
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
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
