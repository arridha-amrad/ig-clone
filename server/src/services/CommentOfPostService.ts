import CommentOfPostModel, {
  ICommentOfPostModel,
} from '../models/CommentOfPostModel';

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
