import mongoose, { Schema, Model } from 'mongoose';

export interface IPostModel {
  _id: Schema.Types.ObjectId;
  user: string;
  likes: string[];
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
  // provided in req.body
  imageURL: string;
  description: string;
}

export const PostSchema = new Schema<IPostModel, Model<IPostModel>, IPostModel>(
  {
    user: {
      type: String,
      ref: 'User',
    },
    comments: [
      {
        type: String,
        ref: 'CommentOfPost',
        default: [],
      },
    ],
    likes: [
      {
        type: String,
        ref: 'User',
        default: [],
      },
    ],
    imageURL: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

const PostModel = mongoose.model<IPostModel>('Post', PostSchema);

export default PostModel;
