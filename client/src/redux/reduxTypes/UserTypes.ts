import { UserData } from "../../dto/AuthDTO";

export const LOADING_USER = "LOADING_USER";
export const STOP_LOADING_USER = "STOP_LOADING_USER";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const USER_ACTIONS_SUCCESS = "SET_ACTIONS_SUCCESS";
export const USER_ACTIONS_FAILED = "USER_ACTIONS_FAILED";
export const RESET_USER = "RESET_USER";

export type UserActionsType =
  | { type: typeof USER_ACTIONS_SUCCESS }
  | { type: typeof LOADING_USER }
  | { type: typeof USER_ACTIONS_FAILED }
  | { type: typeof SET_USER_SUCCESS; payload: UserData }
  | { type: typeof RESET_USER }
  | { type: typeof STOP_LOADING_USER };
