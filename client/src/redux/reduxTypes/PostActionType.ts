import { IPost } from "../reduxReducers/PostReducer";

export const LOADING_POST = "LOADING_POST";
export const SET_POSTS = "SET_POSTS";
export const STOP_LOADING_POST = "STOP_LOADING_POST";

export type PostActionTypes =
  | { type: typeof STOP_LOADING_POST }
  | { type: typeof LOADING_POST }
  | { type: typeof SET_POSTS; payload: IPost[] };
