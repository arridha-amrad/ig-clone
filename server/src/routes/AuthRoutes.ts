import Express from 'express';
import * as authController from '../controllers/AuthController';
import { verifyAccessToken } from '../services/JwtService';

const router = Express.Router();

router.get('/refresh-token', authController.refreshTokenHandler);

router.post('/login', authController.loginHandler);
router.post('/register', authController.registerHandler);
router.post('/forgot-password', authController.forgotPasswordHandler);
router.post(
  '/reset-password/:encryptedLinkToken',
  authController.resetPasswordHandler,
);
router.post('/is-exists', authController.isExists);
router.post('/logout', verifyAccessToken, authController.logoutHandler);

router.put('/verify-email', authController.emailVerificationHandler);

export default router;
