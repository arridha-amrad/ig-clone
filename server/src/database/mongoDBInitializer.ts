import mongoose from 'mongoose';
import CommentOfCommentModel, {
  CommentOfCommentSchema,
  ICommentOfCommentModel,
} from '../models/CommentOfComment';
import {
  CommentOfPostSchema,
  ICommentOfPostModel,
} from '../models/CommentOfPostModel';
import { IPostModel, PostSchema } from '../models/PostModel';
import { IUserModel, UserSchema } from '../models/UserModel';
import {
  IVerificationModel,
  VerificationSchema,
} from '../models/VerificationModel';

export const createConnectionToDB = async (
  uri: string,
): Promise<typeof mongoose> => {
  mongoose.model<IPostModel>('Post', PostSchema);
  mongoose.model<IUserModel>('User', UserSchema);
  mongoose.model<IVerificationModel>('Verification', VerificationSchema);
  mongoose.model<ICommentOfPostModel>('CommentOfPost', CommentOfPostSchema);
  mongoose.model<ICommentOfCommentModel>(
    'CommentOfComment',
    CommentOfCommentSchema,
  );
  return mongoose.connect(uri, {});
};

mongoose.connection.on('connected', () => console.log('mongoDB connected 🚀'));
mongoose.connection.on('error', () =>
  console.log('Mongoose failed to connect to mongoDB'),
);
mongoose.connection.on('disconnected', () =>
  console.log('mongoose is disconnected'),
);
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit();
});
