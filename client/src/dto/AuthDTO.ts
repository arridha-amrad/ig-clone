interface AuthData {
  _id: string;
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
  identity: string;

  // hide from  client
  password: string;
  confirmPassword: string;
}

export interface BirthDayData {
  date: string;
  month: string;
  year: string;
}

export type RegisterData = Pick<
  AuthData,
  "email" | "password" | "username" | "fullName" | "birthDay"
>;

export type LoginData = Pick<AuthData, "identity" | "password">;

export type ForgotPasswordData = Pick<AuthData, "email">;

export interface VerifyEmailData {
  verificationCode: string;
  email: string;
}

export type ResetPasswordData = Pick<
  AuthData,
  "password" | "confirmPassword"
> & { token: string };

export type AuthenticatedUserData = Omit<
  AuthData,
  "identity" | "confirmPassword" | "password"
>;

export type UserData = Omit<
  AuthenticatedUserData,
  | "phoneNumber"
  | "isActive"
  | "isLogin"
  | "isVerified"
  | "gender"
  | "id"
  | "birthDay"
  | "role"
>;

export type EditProfileData = Pick<
  AuthenticatedUserData,
  | "email"
  | "username"
  | "fullName"
  | "website"
  | "bio"
  | "phoneNumber"
  | "gender"
>;
