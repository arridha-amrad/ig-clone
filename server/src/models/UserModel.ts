import mongoose, { Model, Schema } from 'mongoose';
import argon2 from 'argon2';
import { AuthenticationStrategy, RequiredAuthAction } from '../enums/UserEnum';

export interface IUserModel {
  _id: Schema.Types.ObjectId | string;
  username: string;
  fullName: string;
  email: string;
  role: string;
  birthDay: string;
  website: string;
  bio: string;
  phoneNumber: string;
  gender: string;
  followings: number;
  followers: number;
  imageURL: string;
  isActive: boolean;
  isLogin: boolean;
  isVerified: boolean;
  // setup by mongoDB
  createdAt: Date;
  updatedAt: Date;

  // hide from  client
  requiredAuthAction: RequiredAuthAction;
  strategy: AuthenticationStrategy;
  password: string;
  jwtVersion: string;
}

export const UserSchema = new mongoose.Schema<
  IUserModel,
  Model<IUserModel>,
  IUserModel
>(
  {
    followers: {
      type: Number,
      default: 0,
    },
    followings: {
      type: Number,
      default: 0,
    },
    imageURL: {
      type: String,
      default:
        'https://res.cloudinary.com/heartcloud/image/upload/v1633075983/bm7hdlc82cyehr89t0va.jpg',
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'preferNotToSay'],
      default: 'preferNotToSay',
    },
    phoneNumber: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    birthDay: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'moderator'],
      required: true,
      default: 'user',
    },
    password: {
      type: String,
      required: true,
    },
    strategy: {
      type: String,
      required: true,
      enum: ['default', 'google', 'facebook'],
    },
    requiredAuthAction: {
      type: String,
      enum: ['null', 'emailVerification', 'resetPassword'],
    },
    jwtVersion: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isLogin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', async function (next) {
  const hashedPassword = await argon2.hash(this.password);
  this.password = hashedPassword;
  next();
});

const UserModel = mongoose.model<IUserModel>('User', UserSchema);

export default UserModel;
