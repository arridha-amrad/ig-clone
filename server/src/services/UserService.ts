import { Schema } from 'mongoose';
import UserModel, { IUserModel } from '../models/UserModel';

export const save = async (user: IUserModel): Promise<IUserModel> => {
  const newUser = new UserModel(user);
  return newUser.save();
};

export const findUserByUsernameOrEmail = async (
  usernameOrEmail: string,
): Promise<IUserModel | null> => {
  return UserModel.findOne(
    usernameOrEmail.includes('@')
      ? { email: usernameOrEmail }
      : { username: usernameOrEmail },
  );
};

export const findUserById = async (
  userId: Schema.Types.ObjectId | string,
): Promise<IUserModel | null> => {
  return UserModel.findById(userId);
};

export const findUserByIdAndUpdate = async (
  id: Schema.Types.ObjectId | string,
  update: Partial<IUserModel>,
): Promise<IUserModel | null> => {
  return UserModel.findByIdAndUpdate(id, { ...update }, { new: true });
};
