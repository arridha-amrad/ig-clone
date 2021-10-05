import CommentOfCommentModel, { ICommentOfCommentModel } from "../models/CommentOfComment";

export const save = async (data: Partial<ICommentOfCommentModel>): Promise<ICommentOfCommentModel> => {
  const newComment = new CommentOfCommentModel(data)
  return newComment.save()
}

export const findByIdAndUpdate = async (
  cocId: string, content: string
): Promise<ICommentOfCommentModel | null> => {
  return CommentOfCommentModel.findByIdAndUpdate(cocId, { content }, { new: true })
}

export const findByIdAndDelete = async (
  cocId: string
): Promise<ICommentOfCommentModel | null> => {
  return CommentOfCommentModel.findByIdAndDelete(cocId)
}