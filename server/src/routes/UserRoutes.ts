import { Router } from 'express';
import * as userController from '../controllers/UserController';
import { verifyAccessToken } from '../services/JwtService';

const router = Router();

router.get('/me', verifyAccessToken, userController.me);

router.get('/test', (req, res) => {
  res.send('test');
});

router.post(
  '/update-user-data',
  verifyAccessToken,
  userController.updateUserData,
);

router.post(
  '/change-password',
  verifyAccessToken,
  userController.changePassword,
);

router.get('/:username', userController.findUserByUsername);

router.post('/upload-avatar', verifyAccessToken, userController.uploadAvatar);

export default router;
