import { Dispatch } from "redux";
import { AuthActionsType } from "../reduxTypes/AuthTypes";
import axiosInstance from "../../utils/AxiosInterceptors";
import {
  AuthenticatedUserData,
  ForgotPasswordData,
  LoginData,
  ResetPasswordData,
  VerifyEmailData,
} from "../../dto/AuthDTO";
import * as messageActions from "../reduxReducers/MessageReducer";
import { AxiosResponse } from "axios";

type AuthMessageAction = AuthActionsType | messageActions.MessageActionsType;

const dispatchRequiredActions = (dispatch: Dispatch<AuthMessageAction>) => {
  dispatch({ type: "RESET_REQUEST_STATUS" });
  dispatch({ type: "LOADING_AUTH" });
  dispatch({ type: "RESET_MESSAGE" });
};

const dispatchMessage = (
  dispatch: Dispatch<any>,
  message: string,
  type: messageActions.MessageTypes
) => {
  dispatch(messageActions.setMessage(message, type));
};

export const uploadAvatar =
  (formData: FormData) => async (dispatch: Dispatch<AuthActionsType>) => {
    dispatch({ type: "LOADING_AUTH" });
    try {
      const res = (await axiosInstance.post("/user/upload-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })) as AxiosResponse<unknown>;
      dispatch({
        type: "UPLOAD_AVATAR",
        payload: res.data as string,
      });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "STOP_LOADING_AUTH" });
    }
  };

export const updateUserData =
  (data: Partial<AuthenticatedUserData>) =>
    async (dispatch: Dispatch<AuthMessageAction>) => {
      dispatchRequiredActions(dispatch);
      try {
        const result = (await axiosInstance.put(
          "/user/update-user-data",
          data
        )) as AxiosResponse<AuthenticatedUserData>;
        dispatchMessage(dispatch, "Saved", "success");
        dispatch({ type: "UPDATE_USER_DATA", payload: result.data });
      } catch (err: any) {
        console.log(err.response.data);
        dispatchMessage(dispatch, err.response.data.message, "danger");
      }
    };

export const getLoginUserData =
  () => async (dispatch: Dispatch<AuthActionsType>) => {
    dispatch({ type: "LOADING_AUTH" })
    try {
      const result = await axiosInstance.get("/user/me");
      dispatch({
        type: "AUTHENTICATED_USER_DATA",
        payload: result.data,
      });
    } catch (err: any) {
      console.log(err.response.data);
    } finally {
      dispatch({ type: "STOP_LOADING_AUTH" })
    }
  };

export const verifyEmail =
  (data: VerifyEmailData) => async (dispatch: Dispatch<AuthMessageAction>) => {
    dispatchRequiredActions(dispatch);
    try {
      await axiosInstance.put("/auth/verify-email", data);
      dispatchMessage(dispatch, "Email verification is successful", "success");
      dispatch({ type: "REDIRECT_TO_LOGIN" });
    } catch (err: any) {
      console.log(err.response);
      dispatchMessage(dispatch, err.response.data, "danger");
      dispatch({ type: "AUTH_ERROR" });
    }
  };

export const logout = () => async (dispatch: Dispatch<AuthMessageAction>) => {
  dispatchRequiredActions(dispatch);
  try {
    await axiosInstance.post("/auth/logout");
    localStorage.removeItem("data");
    dispatch({ type: "LOGOUT" });
  } catch (err: any) {
    console.log(err);
  }
};

export const login =
  (loginData: LoginData) => async (dispatch: Dispatch<AuthMessageAction>) => {
    dispatchRequiredActions(dispatch);
    try {
      const res = (await axiosInstance.post(
        "/auth/login",
        loginData
      )) as AxiosResponse<AuthenticatedUserData>;
      dispatch({
        type: "LOGIN_SUCCESS",
      });
      dispatch({
        type: "AUTHENTICATED_USER_DATA",
        payload: res.data,
      });
      localStorage.setItem("data", "login");
    } catch (err: any) {
      dispatch({
        type: "AUTH_ERROR",
      });
      dispatchMessage(dispatch, err.response.data.message, "danger");
    }
  };

export const forgotPassword =
  (formData: ForgotPasswordData) =>
    async (dispatch: Dispatch<AuthMessageAction>) => {
      dispatchRequiredActions(dispatch);
      try {
        const res = (await axiosInstance.post(
          "/auth/forgot-password",
          formData
        )) as AxiosResponse<string>;
        dispatch({
          type: "AUTH_SUCCESS",
        });
        dispatchMessage(dispatch, res.data, "success");
      } catch (err: any) {
        dispatch({
          type: "AUTH_ERROR",
        });
        dispatchMessage(dispatch, err.response.data.message, "danger");
      }
    };

export const resetPassword =
  (formData: ResetPasswordData) =>
    async (dispatch: Dispatch<AuthMessageAction>) => {
      dispatchRequiredActions(dispatch);
      try {
        const res = (await axiosInstance.post(
          `/auth/reset-password/${formData.token}`,
          { password: formData.password }
        )) as AxiosResponse<string>;
        dispatch({
          type: "AUTH_SUCCESS",
        });
        dispatchMessage(dispatch, res.data, "success");
      } catch (err: any) {
        dispatch({
          type: "AUTH_ERROR",
        });
        dispatchMessage(dispatch, err.response.data.message, "danger");
      }
    };
