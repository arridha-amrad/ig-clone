import mongoose, { Schema, Model } from 'mongoose';

export interface IPostModel {
  _id: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  likes: [Schema.Types.ObjectId];
  comments: [Schema.Types.ObjectId];
  createdAt: Date;
  updatedAt: Date;
  // provided in req.body
  imageURL: string;
  description: string;
}

const PostSchema = new Schema<IPostModel, Model<IPostModel>, IPostModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'CommentOfPost',
        default: [],
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
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
