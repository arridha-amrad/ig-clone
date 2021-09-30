import React, { useRef, useState } from "react";
import styled from "styled-components";

export type ValidationResult = "available" | "not-available";

interface AuthInputProps {
  type: string;
  value: string;
  label: string;
  name: string;
  error?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  isWithValidation?: boolean;
  validationResult?: any;
  autoComplete?: "off" | "on";
}

const AuthInput: React.FC<AuthInputProps> = ({
  value,
  label,
  name,
  error,
  type,
  handleChange,
  onKeyUp = undefined,
  onBlur = undefined,
  isWithValidation = false,
  autoComplete = "on",
  validationResult,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <InputField>
        <AdditionalArea>
          <>
            {isWithValidation && (
              <>
                {validationResult === "available" && (
                  <ValidIcon className="far fa-check-circle"></ValidIcon>
                )}
                {validationResult === "not-available" && (
                  <InValidIcon className="far fa-times-circle"></InValidIcon>
                )}
              </>
            )}
            {type === "password" && !!value && (
              <PasswordToggler onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? "Hide" : "Show"}
              </PasswordToggler>
            )}
          </>
        </AdditionalArea>

        <Input
          ref={inputRef}
          type={
            type === "text"
              ? "text"
              : type === "password" && showPassword
              ? "text"
              : "password"
          }
          name={name}
          autoComplete={autoComplete}
          isFloat={!!value}
          value={value}
          onKeyUp={onKeyUp}
          onBlur={onBlur}
          onChange={handleChange}
        />
        <Label onClick={() => inputRef.current?.focus()} isFloat={!!value}>
          {label}
        </Label>
      </InputField>
      {error && <InputWarning>{error}</InputWarning>}
    </>
  );
};

export default AuthInput;

const AdditionalArea = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
`;

const ValidIcon = styled.i`
  display: block;
  font-size: 1.1rem;
  color: var(--grey);
`;

const InValidIcon = styled.i`
  display: block;
  font-size: 1.1rem;
  color: var(--red);
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--greyBG);
  z-index: 0;
  width: 100%;
  flex-grow: 1;
  height: 38px;
  position: relative;
`;

interface InputProps {
  isFloat: boolean;
}
export const Input = styled.input<InputProps>`
  height: 100%;
  z-index: 0;
  display: flex;
  flex-grow: 1;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  font-size: 12px;
  padding: ${(props) => (props.isFloat ? "13px" : "0")} 10px 0;
  background-color: transparent;
  color: #262626;
  letter-spacing: 0.1px;

  &:focus {
    outline: none;
    border: 1px solid #7e7e7e;
  }
`;

interface LabelProps {
  isFloat: boolean;
}
export const Label = styled.label<LabelProps>`
  position: absolute;
  cursor: text;
  left: 11px;
  color: #949494;
  font-size: ${(props) => (props.isFloat ? "10px" : "12px")};
  transform: ${(props) =>
    props.isFloat ? "translateY(-8px)" : "translateY(0px)"};
  transition: transform 0.1s ease-in;
  user-select: none;
`;

export const InputWarning = styled.div`
  display: block;
  text-align: end;
  font-size: 0.8rem;
  color: red;
`;

export const PasswordToggler = styled.div`
  font-weight: 700;
  z-index: 99;
  border: none;
  font-size: 14px;
  color: #262626;
  background-color: transparent;
  cursor: pointer;
  margin-left: 5px;

  &:focus {
    outline: none;
  }
`;
