import mongoose, { Schema, Model } from 'mongoose';

export interface IPostModel {
  _id: Schema.Types.ObjectId;
  user: string;
  imageURL: string;
  description: string;
  location?: string
  likes: string[];
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
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
    location: {
      type: String
    }
  },
  { timestamps: true },
);

const PostModel = mongoose.model<IPostModel>('Post', PostSchema);

export default PostModel;
