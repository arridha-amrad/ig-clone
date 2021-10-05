import express from "express"
import { verifyAccessToken } from "../services/JwtService"
import { addComment, updateComment, deleteComment } from "../controllers/CommentOfCommentController"

const router = express.Router()

router.post("/:copId", verifyAccessToken, addComment)
router.put("/:cocId", verifyAccessToken, updateComment)
router.delete("/:cocId", verifyAccessToken, deleteComment)

export default router