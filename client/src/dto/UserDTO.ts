export interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}

interface PostData {
  id: string;
  imageURL: string;
  totalLikes: number;
  totalComments: number;
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
  posts: PostData[];
}
