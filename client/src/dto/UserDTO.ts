export interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface ProfilePageData {
  username: string;
  isAuthenticatedUser: boolean;
  totalPosts: number;
  totalFollowers: number;
  totalFollowings: number;
  fullName: string;
  bio: string;
  website: string;
  imageURL: string;
}
