import express from 'express';
import { verifyAccessToken } from '../services/JwtService';
import * as postController from '../controllers/PostController';

const router = express.Router();

router.post('/', verifyAccessToken, postController.createPost);
router.post("/like-post/:postId", verifyAccessToken, postController.likePost)

router.get('/', postController.getPosts);
router.get('/:username', postController.getPostsByUsername);

router.put('/:postId', verifyAccessToken, postController.updatePost);

router.delete('/:postId', verifyAccessToken, postController.deletePost);

export default router;
