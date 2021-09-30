import { UserData } from "../../dto/AuthDTO";
import { UserActionsType } from "../reduxTypes/UserTypes";

// export type UserState = Partial<UserData> & { loadingUser: boolean };

export interface UserState {
  loadingUser: boolean;
  user: UserData;
}

const initialState: UserState = {
  loadingUser: false,
  user: {
    _id: "",
    bio: "",
    createdAt: new Date(),
    email: "",
    followers: 0,
    followings: 0,
    fullName: "",
    imageURL: "",
    updatedAt: new Date(),
    username: "",
    website: "",
  },
};

const UserReducer = (
  state = initialState,
  action: UserActionsType
): UserState => {
  switch (action.type) {
    case "LOADING_USER":
      return {
        ...state,
        loadingUser: true,
      };
    case "STOP_LOADING_USER":
      return {
        ...state,
        loadingUser: false,
      };
    case "SET_USER_SUCCESS":
      return {
        ...state,
        user: { ...action.payload },
      };
    case "RESET_USER":
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default UserReducer;
