import { Dispatch } from "redux";
import { UserActionsType } from "../reduxTypes/UserTypes";
import axiosInstance from "../../utils/AxiosInterceptors";
import { ChangePasswordData } from "../../dto/UserDTO";
import {
  MessageActionsType,
  MessageTypes,
  setMessage,
} from "../reduxReducers/MessageReducer";
import { AxiosResponse } from "axios";

type UserMessageAction = UserActionsType | MessageActionsType;

const dispatchRequiredActions = (dispatch: Dispatch<UserMessageAction>) => {
  dispatch({ type: "LOADING_USER" });
  dispatch({ type: "RESET_MESSAGE" });
};

const dispatchMessage = (
  dispatch: Dispatch<any>,
  message: string,
  type: MessageTypes
) => {
  dispatch(setMessage(message, type));
};


export const changePassword =
  (data: ChangePasswordData) =>
    async (dispatch: Dispatch<UserMessageAction>) => {
      dispatchRequiredActions(dispatch);
      try {
        const result = (await axiosInstance.put(
          "/user/change-password",
          data
        )) as AxiosResponse<string>;
        dispatchMessage(dispatch, result.data, "success");
      } catch (err: any) {
        dispatchMessage(dispatch, err.response.data.message, "danger");
      } finally {
        dispatch({ type: "STOP_LOADING_USER" });
      }
    };

export const findUserAndPostsByUsername =
  (username: string) => async (dispatch: Dispatch<UserActionsType>) => {
    dispatch({ type: "LOADING_USER" });
    try {
      const result = await axiosInstance.get(`/user${username}`);
      dispatch({
        type: "SET_USER_SUCCESS",
        payload: result.data,
      });
    } catch (err: any) {
      console.log(err.response.data);
    } finally {
      dispatch({ type: "STOP_LOADING_USER" });
    }
  };
