import CommentOfPostModel, {
  ICommentOfPostModel,
} from '../models/CommentOfPostModel';

export const save = async (
  data: ICommentOfPostModel,
): Promise<ICommentOfPostModel> => {
  const newComment = new CommentOfPostModel(data);
  return newComment.save();
};
