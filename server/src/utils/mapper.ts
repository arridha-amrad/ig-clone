import { AuthenticatedUserData } from '../dto/AuthData';
import { IUserModel } from '../models/UserModel';

export const authenticatedUserDataMapper = (
  user: IUserModel,
): AuthenticatedUserData => {
  const data: AuthenticatedUserData = {
    _id: user._id,
    username: user.username,
    email: user.email,
    fullName: user.fullName,
    followers: user.followers,
    followings: user.followings,
    website: user.website,
    bio: user.bio,
    phoneNumber: user.phoneNumber,
    role: user.role,
    gender: user.gender,
    imageURL: user.imageURL,
    isActive: user.isActive,
    isLogin: user.isLogin,
  };
  return data;
};
