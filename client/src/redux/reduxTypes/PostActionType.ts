import { IPost } from "../reduxReducers/PostReducer";

export const LOADING_POST = "LOADING_POST";
export const SET_POSTS = "SET_POSTS";

export type PostActionTypes = | { type: typeof LOADING_POST } | { type: typeof SET_POSTS; payload: IPost[] }