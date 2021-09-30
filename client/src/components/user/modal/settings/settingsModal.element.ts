import { Link } from "react-router-dom";
import styled from "styled-components";

interface ModalBackground2Props {
  ref: any;
  isShow: boolean;
}
export const ModalBackground2 = styled.div<ModalBackground2Props>`
  display: ${(props) => (props.isShow ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 91;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

interface ModalWrapper2Props {
  isShow: boolean;
}
export const ModalWrapper2 = styled.div<ModalWrapper2Props>`
  width: 402px;
  background-color: #fff;
  border-radius: 10px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ButtonLink = styled(Link)`
  display: block;
  width: 100%;
  height: 49px;
  text-align: center;
  padding-top: 16px;
  color: #262626;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;
