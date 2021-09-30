import { FC } from "react";
import { MessageTypes } from "../../redux/reduxReducers/MessageReducer";
import styled from "styled-components";

interface MyAlertProps {
  message: string;
  type: MessageTypes;
}

const MyAlert: FC<MyAlertProps> = ({ message, type }) => {
  return <Alert sc_type={type}>{message}</Alert>;
};

export default MyAlert;

interface AlertProps {
  sc_type: MessageTypes;
}

export const Alert = styled.p<AlertProps>`
  font-size: 14px;
  margin: 10px 0;
  text-align: center;
  font-size: 0.9rem;
  width: 100%;
  color: ${(props) =>
    props.sc_type === "success"
      ? "#43a047"
      : props.sc_type === "danger"
      ? "#f44336"
      : "#ccc"};
`;
