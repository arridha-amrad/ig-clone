import { Request, Response, NextFunction } from "express"
import { HTTP_CODE } from "../enums/HTTP_CODE"
import Exception from "../exceptions/Exception"
import * as CommentOfPostService from "../services/CommentOfPostService"
import * as CommentOfCommentService from "../services/CommentOfCommentService"
import * as NotificationService from "../services/NotificationService"
import ServerErrorException from "../exceptions/ServerErrorException"

export const deleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const cocId = req.params.cocId
  try {
    const deletedComment = await CommentOfCommentService.findByIdAndDelete(cocId)
    if (deletedComment) {
      res.status(200).send("comment deleted")
    }
  } catch (err: any) {
    console.log(err)
    next(new ServerErrorException())
  }
}

export const updateComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const cocId = req.params.cocId
  const { content } = req.body
  try {
    const updatedComment = await CommentOfCommentService.findByIdAndUpdate(cocId, content)
    if (updatedComment) {
      res.status(200).send(updatedComment)
    }
  } catch (err: any) {
    console.log(err)
    next(new ServerErrorException())
  }
}

export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const commentId = req.params.copId
  const userId = req.userId
  const { content } = req.body
  try {
    const cop = await CommentOfPostService.findCommentById(commentId)
    if (cop) {
      const coc = await CommentOfCommentService.save({
        content,
        user: userId,
        comment: cop.id
      })
      cop.comments.push(coc._id as string)
      const result = await cop.save()

      await NotificationService.save({
        receiver: cop.user,
        sender: userId,
        type: "comment",
        commentOfComment: coc._id as string
      })

      res.status(200).send(result)
    } else {
      next(new Exception(HTTP_CODE.NOT_FOUND, "comment not found"))
    }
  } catch (err: any) {
    console.log(err)
  }
}