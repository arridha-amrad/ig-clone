import express from 'express';
import { verifyAccessToken } from '../services/JwtService';
import * as commentController from '../controllers/CommentController';

const router = express.Router();

router.post(
  '/add-comment/:postId',
  verifyAccessToken,
  commentController.addComment,
);
router.put(
  '/update-comment',
  verifyAccessToken,
  commentController.updateComment,
);
router.delete(
  '/delete-comment',
  verifyAccessToken,
  commentController.deleteComment,
);

export default router;
