import {
  ChangeEvent,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
} from "react";
import styled from "styled-components";

interface InlineInputProps {
  size?: "big" | "small";
  error?: string;
  label: string;
  name: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
}

const InlineInput: FC<InlineInputProps> = ({
  label,
  name,
  onChange,
  size = "small",
  value,
  children,
  error,
  onBlur,
  onKeyUp,
  type,
}) => {
  return (
    <FormGroup>
      <Label isBig={size === "big"}>{label}</Label>
      <InputArea>
        <Input
          isBig={size === "big"}
          onKeyUp={onKeyUp}
          onBlur={onBlur}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
        />
        {children && children}
        {error && <ErrorText>{error}</ErrorText>}
      </InputArea>
    </FormGroup>
  );
};
export default InlineInput;

export const ErrorText = styled.p`
  color: red !important;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: start;
  margin: 15px 0;
`;

interface LabelProps {
  isBig?: boolean;
}
export const Label = styled.label<LabelProps>`
  display: block;
  font-weight: 600;
  width: 200px;
  text-align: right;
  padding-top: 5px;
  font-size: ${(props) => (props.isBig ? "1rem" : "15px")};
`;

interface InputAreaProps {
  aa_bigInput?: boolean;
}

export const InputArea = styled.div<InputAreaProps>`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 10px;
    font-size: 13px;
    color: #8e8e8e;
    margin-left: 30px;
    letter-spacing: 1.3;
    line-height: 1.4;

    span {
      font-weight: 600;
      display: block;
    }
  }
`;

interface InputProps {
  isBig: boolean;
}

const Input = styled.input<InputProps>`
  outline: none;
  margin-left: 30px;
  display: block;
  font-size: ${(props) => (props.isBig ? "1.1rem" : "15px")};
  padding: ${(props) => (props.isBig ? "10px" : "8px")};
  width: 100%;
  border-radius: ${(props) => (props.isBig ? "10px" : "3px")};
  border: 1px solid #dbdbdb;

  &:focus {
    border-radius: ${(props) => (props.isBig ? "10px" : "3px")};
    border: 1px solid #aaa;
  }
`;
