import { AuthenticatedUserData } from "../../dto/AuthDTO";
import { AuthActionsType } from "../reduxTypes/AuthTypes";

export interface AuthState {
  loadingAuth: boolean;
  isAuthenticated: boolean;
  isRedirectToLoginPage: boolean;
  requestStatus?: boolean;
  authenticatedUser: AuthenticatedUserData;
}

const initialState: AuthState = {
  loadingAuth: false,
  isAuthenticated: false,
  requestStatus: undefined,
  isRedirectToLoginPage: false,
  authenticatedUser: {
    _id: "",
    bio: "",
    birthDay: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    email: "",
    followers: 0,
    followings: 0,
    fullName: "",
    gender: "",
    imageURL: "",
    isActive: false,
    isLogin: false,
    isVerified: false,
    phoneNumber: "",
    role: "",
    username: "",
    website: "",
  },
};

const AuthReducer = (
  state = initialState,
  action: AuthActionsType
): AuthState => {
  switch (action.type) {
    case "UPDATE_USER_DATA":
      return {
        ...state,
        authenticatedUser: { ...action.payload },
        loadingAuth: false,
        requestStatus: true,
      };
    case "AUTHENTICATED_USER_DATA":
      return {
        ...state,
        authenticatedUser: { ...action.payload },
      };
    case "REDIRECT_TO_LOGIN":
      return {
        ...state,
        isRedirectToLoginPage: true,
        loadingAuth: false,
      };
    case "STOP_LOADING_AUTH":
      return {
        ...state,
        loadingAuth: false,
      };
    case "SET_AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: true,
        loadingAuth: false,
      };
    case "LOADING_AUTH":
      return {
        ...state,
        loadingAuth: true,
      };
    case "RESET_REQUEST_STATUS":
      return {
        ...state,
        requestStatus: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        requestStatus: true,
        loadingAuth: false,
        isAuthenticated: true,
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        loadingAuth: false,
        requestStatus: true,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        loadingAuth: false,
        requestStatus: false,
      };
    case "SET_UNAUTHENTICATED":
      return {
        ...state,
        isAuthenticated: false,
      };
    case "LOGOUT":
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default AuthReducer;
