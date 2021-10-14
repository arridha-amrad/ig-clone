import { Dispatch } from "redux";
import axiosInstance from "../../utils/AxiosInterceptors";
import { MessageActionsType, setMessage } from "../reduxReducers/MessageReducer";
import { PostActionTypes } from "../reduxTypes/PostActionType";

export const createPost = (formData: FormData, description: string) => async (dispatch: Dispatch<PostActionTypes | MessageActionsType>) => {
  dispatch({ type: "LOADING_POST" })
  try {
    const res = await axiosInstance.post("/post", {
      description,
      imageFile: formData
    }, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    if (res.status === 200) {
      dispatch(setMessage("new post added", "success") as any)
    }
  } catch (err: any) {
    console.log(err);
  }
}