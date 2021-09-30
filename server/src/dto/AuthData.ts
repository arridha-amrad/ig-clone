import { IUserModel } from '../models/UserModel';

export type LoginRequest = Pick<IUserModel, 'password'> & {
  identity: string;
};

export type RegisterRequest = Pick<
  IUserModel,
  'username' | 'email' | 'password'
>;

export type LoginResponse = Omit<
  IUserModel,
  'password' | 'strategy' | 'requiredAuthAction' | 'jwtVersion'
>;

export type FetchedUserResponse = Pick<
  IUserModel,
  'username' | 'email' | 'createdAt' | 'isLogin'
>;

export type AuthenticatedUserData = Pick<
  IUserModel,
  | '_id'
  | 'email'
  | 'bio'
  | 'followers'
  | 'followings'
  | 'fullName'
  | 'gender'
  | 'imageURL'
  | 'isActive'
  | 'isLogin'
  | 'phoneNumber'
  | 'username'
  | 'website'
  | 'role'
>;
