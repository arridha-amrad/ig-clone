import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { ErrorText, FormGroup, InputArea, Label } from "./InlineInput";

interface InlineTextAreaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  label: string;
  value: string;
  error?: string;
}

const InlineTextArea: FC<InlineTextAreaProps> = ({
  label,
  name,
  onChange,
  value,
  children,
  error,
}) => {
  return (
    <FormGroup>
      <Label isBig={false}>{label}</Label>
      <InputArea>
        <TextArea name={name} onChange={onChange} value={value} />
        {children && children}
        {error && <ErrorText>{error}</ErrorText>}
      </InputArea>
    </FormGroup>
  );
};
export default InlineTextArea;

const TextArea = styled.textarea`
  margin-left: 30px;
  display: block;
  font-size: 15px;
  padding: 8px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  outline: none;

  &:focus {
    border: 1px solid #aaa;
  }
`;
