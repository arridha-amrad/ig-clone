import { Dispatch } from "redux";
import * as uuid from "uuid";

export const SET_MESSAGE = "SET_MESSAGE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";
export const RESET_MESSAGE = "RESET_MESSAGE";

export type MessageTypes = "success" | "danger" | "info";

export type MessageActionsType =
  | { type: typeof RESET_MESSAGE }
  | { type: typeof SET_MESSAGE; payload: IMessage }
  | { type: typeof CLEAR_MESSAGE; payload: string };

export const setMessage =
  (message: string, type: MessageTypes) =>
  (dispatch: Dispatch<MessageActionsType>) => {
    const id = uuid.v4();
    dispatch({
      type: "SET_MESSAGE",
      payload: {
        id,
        text: message,
        type,
      },
    });
    setTimeout(() => {
      dispatch({
        type: "CLEAR_MESSAGE",
        payload: id,
      });
    }, 8000);
  };

export interface IMessage {
  text: string;
  id: string;
  type: MessageTypes;
}

interface MessageState {
  messages: IMessage[];
}

const initialState: MessageState = {
  messages: [],
};

export const MessageReducer = (
  state = initialState,
  action: MessageActionsType
): MessageState => {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "CLEAR_MESSAGE":
      return {
        ...state,
        messages: state.messages.filter((m) => m.id !== action.payload),
      };
    case "RESET_MESSAGE": {
      return {
        ...state,
        messages: [],
      };
    }
    default:
      return state;
  }
};
