import { Router } from 'express';
import * as userController from '../controllers/UserController';
import { verifyAccessToken } from '../services/JwtService';

const router = Router();

router.get('/me', verifyAccessToken, userController.me);
router.get('/:username', userController.findUserAndPostsByUsername);

router.put(
  '/update-user-data',
  verifyAccessToken,
  userController.updateUserData,
);
router.put(
  '/change-password',
  verifyAccessToken,
  userController.changePassword,
);

router.post('/upload-avatar', verifyAccessToken, userController.uploadAvatar);

export default router;
