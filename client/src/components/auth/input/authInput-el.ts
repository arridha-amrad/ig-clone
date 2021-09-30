import styled from "styled-components";

export const InputField = styled.div`
  width: 100%;
  height: 38px;
  position: relative;
`;

interface InputProps {
  isFloat: boolean;
}
export const Input = styled.input<InputProps>`
  height: 100%;
  width: 100%;
  border-radius: 0px;
  border: 1px solid #dbdbdb;
  font-size: 12px;
  padding: ${(props) => (props.isFloat ? "13px" : "0")} 10px 0;
  background-color: #fafafa;
  color: #262626;
  letter-spacing: 0.1px;

  &:focus {
    outline: none;
  }
`;

interface LabelProps {
  isFloat: boolean;
}
export const Label = styled.label<LabelProps>`
  position: absolute;
  left: 11px;
  color: #949494;
  font-size: ${(props) => (props.isFloat ? "10px" : "12px")};
  transform: ${(props) =>
    props.isFloat ? "translateY(5px)" : "translateY(10px)"};
  transition: transform 0.1s ease-in;
  user-select: none;
`;

export const InputHelperText = styled.div`
  display: block;
  text-align: end;
  font-size: 0.8rem;
  color: red;
`;

export const PasswordToggler = styled.button`
  position: absolute;
  z-index: 99;
  top: 12px;
  right: 10px;
  font-weight: 700;
  border: none;
  font-size: 14px;
  color: #262626;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
