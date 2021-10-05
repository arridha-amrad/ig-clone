export const registerSuccess = (email: string): string =>
  `Enter the confirmation code we sent to ${email}`;
export const forgotPassword = (email: string): string =>
  `An email has been sent to ${email}. Please follow to reset your password.`;
export const emailVerified = (username: string): string =>
  `Welcome ${username}! Your email verification is successful. You can login with your account.`;
export const duplicateData = (data: string): string =>
  `Failed. ${data} has been registered.`;
export const invalidPassword = 'Invalid password';
export const userNotFound = 'user not found';
export const emailNotVerified = 'please verify your email';
export const resetPassword =
  'Congratulations! Your password have changed successfully. Now you can login with your new password.';

export const commentNotification = (username: string, commentContent: string) =>
  `${username} commented on your post "${commentContent}"`;

export const likedPostNotification = (username: string) => `${username} like your post`