import styled from "styled-components";

interface ButtonProps {
  readonly aa_bg?: string;
  aa_width?: string;
  readonly aa_isFullWidth?: boolean;
  aa_height?: string;
  aa_isLoading?: boolean;
  aa_color?: string;
  aa_fontSize?: string;
}

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props.aa_bg || "#03a9f4"};
  color: ${(props) => props.aa_color || "#fff"};
  font-weight: bold;
  font-size: 15px;
  border-radius: 5px;
  width: ${(props) =>
    props.aa_isFullWidth ? "100%" : props.aa_width ? props.aa_width : "120px"};
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: unset;
    background: #b8defb;
  }
`;

interface OBProps {
  aa_lineColor?: string;
  aa_isFullWidth?: boolean;
  aa_width?: string;
}

export const OutlineButton = styled.button<OBProps>`
  height: 50px;
  width: ${(props) =>
    props.aa_isFullWidth ? "100%" : props.aa_width || "100px"};
  padding: 0 1rem;
  font-size: 1rem;
  background: #fff;
  border-radius: 5px;
  border: 2px solid ${(props) => props.aa_lineColor || "#333"};
  color: ${(props) => props.aa_lineColor || "#333"};
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: unset;
    filter: contrast(99999);
  }
  &:hover {
    border: none;
    background: ${(props) => props.aa_lineColor};
    color: #fff;
  }
  &:active {
    outline: none;
    border: none;
    transform: ${(props) => !props.disabled && "scale(0.95, 0.95)"};
    transition: transform 0.3s;
  }
`;

export const ButtonMenu = styled.button<ButtonProps>`
  background: ${(props) => props.aa_bg || "white"};
  color: ${(props) => props.aa_color || "#fff"};
  height: ${(props) => props.aa_height};
  font-weight: medium;
  font-size: ${(props) => props.aa_fontSize || "1rem"};
  border-radius: 0px;
  width: ${(props) =>
    props.aa_isFullWidth ? "100%" : props.aa_width || "100px"};
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #eee;
    box-shadow: none;
  }
  &:disabled {
    cursor: unset;
    background: #e1bee7;
  }
  &:active {
    outline: none;
    border: none;
  }
`;

interface SocialButtonProps {
  aa_width?: string;
}
export const SocialButton = styled.img<SocialButtonProps>`
  cursor: pointer;
  background: #eee;
  padding: 8px;
  border-radius: 50%;
  width: ${(props) => props.aa_width || "25px"};
  &:hover {
    background: #ccc;
    transition: all 0.2s ease-in-out;
  }
`;
