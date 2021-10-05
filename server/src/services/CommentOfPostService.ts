import CommentOfPostModel, {
  ICommentOfPostModel,
} from '../models/CommentOfPostModel';
import { Document, Schema } from "mongoose"

type MongoDBCommentOfPostModel =
  // eslint-disable-next-line
  | (Document<any, any, ICommentOfPostModel> &
    ICommentOfPostModel & {
      _id: Schema.Types.ObjectId;
    })
  | null;

export const save = async (
  data: ICommentOfPostModel,
): Promise<ICommentOfPostModel> => {
  const newComment = new CommentOfPostModel(data);
  return newComment.save();
};

export const findByIdAndUpdate = async (
  commentId: string,
  data: Partial<ICommentOfPostModel>,
): Promise<ICommentOfPostModel | null> => {
  return CommentOfPostModel.findByIdAndUpdate(
    commentId,
    {
      ...data,
    },
    { new: true },
  );
};

export const findByIdAndDelete = async (
  commentId: string,
): Promise<ICommentOfPostModel | null> => {
  return CommentOfPostModel.findByIdAndDelete(commentId);
};

export const findCommentById = async (
  commentId: string
): Promise<MongoDBCommentOfPostModel> => {
  return CommentOfPostModel.findById(commentId)
}