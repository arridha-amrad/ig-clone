import express from 'express';
import { verifyAccessToken } from '../services/JwtService';
import * as commentController from '../controllers/CommentOfPostController';

const router = express.Router();

router.post('/:postId', verifyAccessToken, commentController.addComment);

router.put('/:commentId', verifyAccessToken, commentController.updateComment);

router.delete(
  '/:commentId',
  verifyAccessToken,
  commentController.deleteComment,
);

export default router;
