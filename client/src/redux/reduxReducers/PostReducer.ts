import { PostActionTypes } from "../reduxTypes/PostActionType"

interface ILike {
  _id: string;
  imageURL: string;
  username: string;
}

export interface IPost {
  _id: string;
  user: string;
  imageURL: string;
  description: string;
  location?: string
  likes: ILike[];
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PostState {
  posts: IPost[]
  loadingPost: boolean
}

const initialState: PostState = {
  loadingPost: false,
  posts: []
}

const PostReducer = (
  state = initialState,
  action: PostActionTypes
): PostState => {
  switch (action.type) {
    case "LOADING_POST":
      return {
        ...state,
        loadingPost: true,
      }
    case "SET_POSTS":
      return {
        ...state,
        posts: [...action.payload],
        loadingPost: false
      }
    default:
      return state
  }
}

export default PostReducer;