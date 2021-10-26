export interface ChangePasswordData {
   oldPassword: string;
   newPassword: string;
}

export interface PostData {
   id: string;
   imageURL: string;
   totalLikes: number;
   totalComments: number;
}

export interface ProfilePageData {
   username: string;
   isAuthenticatedUser: boolean;
   followers: number;
   followings: number;
   fullName: string;
   bio: string;
   website: string;
   imageURL: string;
   posts: PostData[];
}
