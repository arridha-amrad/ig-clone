import styled from "styled-components";
import { Link } from "react-router-dom";

interface OutlineFloatingFieldProps {
  aa_isFloat: boolean;
}
export const OutlineFloatingField = styled.div<OutlineFloatingFieldProps>`
  justify-content: center;
  position: relative;
  background-color: transparent;
  border: 1px solid #ccc;
  height: 40px;
  width: 100%;

  .pt {
    transform: ${(props) => props.aa_isFloat && "translateY(-18px)"};
    transition: transform 0.3s ease-in;
    font-size: ${(props) => (props.aa_isFloat ? "12px" : "14px")};
    z-index: ${(props) => props.aa_isFloat && "5"};
    color: ${(props) => props.aa_isFloat && "#ba68c8"};
    padding: ${(props) => props.aa_isFloat && "0 0.5rem"};
  }

  &:hover {
    .tx {
      transform: translateY(-18px);
      transition: transform 0.2s ease-in-out;
      font-size: 12px;
      z-index: 2;
      padding: 0 0.5rem;
      color: #ba68c8;
    }
  }
`;

export const OutlineFloatingInput = styled.input`
  font-family: "Noto Sans", sans-serif;
  background-color: transparent;
  width: 100%;
  height: 100%;
  font-size: 15px;
  padding-left: 14px;
  outline: none;
  border: none;
  z-index: 1;

  &:focus,
  &:hover {
    box-shadow: 0px 0px 1px 1px #ba68c8;
    border: none;
  }
`;

interface OutlineFloatingLabelProps {
  aa_background?: string;
}
export const OutlineFloatingLabel = styled.label<OutlineFloatingLabelProps>`
  background: ${(props) => props.aa_background || "#fff"};
  color: #ccc;
  position: absolute;
  top: 10px;
  left: 14px;
  font-size: 14px;
  z-index: 0;
`;

export const InputHelperText = styled.div`
  display: block;
  text-align: end;
  font-size: 0.8rem;
  color: red;
`;

export const CheckBoxLabel = styled.label`
  font-size: 14px;
  color: #333;
  margin-left: 0.3rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  color: #1a1a1b;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 3px;
`;

export const IconSpacer = styled.div`
  height: 26px;
  width: 1px;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 7px;
  left: 50px;

  @media screen and (max-width: 500px) {
    left: 45px;
  }
`;

export const InputField = styled.div`
  /* border: 4px solid orange; */
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const InputField768 = styled(InputField)`
  @media (min-width: 768px) {
    display: none;
  }
`;

interface LeftInputIconFieldProps {
  aa_cursor?: string;
}
export const LeftInputIconField = styled.button<LeftInputIconFieldProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5px 0 0 5px;
  cursor: ${(props) => props.aa_cursor || "pointer"};
  border: none;
  outline: none;
  width: 50px;
  height: 40px;
  /* background: #e8eaf6; */
  background: none;
  @media screen and (max-width: 500px) {
    top: 1px;
    width: 55px;
    left: 0px;
  }
`;

export const LeftInputIcon = styled.img`
  height: 20px;
  position: absolute;
  top: 10px;
  left: 16px;

  @media screen and (max-width: 500px) {
    top: 7px;
  }
`;

export const RightInputIconField = styled.div`
  padding: 10px 10px;
  height: 37px;
  width: 45px;
  border-radius: 0 5px 5px 0;
  position: absolute;
  top: 1px;
  right: 3px;
  background: #fff;
`;

interface RightInputIconProps {
  aa_width?: string;
  aa_top?: string;
}
export const RightInputIcon = styled.img<RightInputIconProps>`
  position: absolute;
  right: 10px;
  width: ${(props) => props.aa_width || "25px"};
  top: ${(props) => props.aa_top || "6px"};
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 23px;
  }
`;

interface InputFieldProps {
  aa_onFocusShadow?: boolean;
  aa_noBorder?: boolean;
  aa_isError?: boolean;
  aa_densed?: boolean;
  aa_withIconLeft?: boolean;
  aa_withIconRight?: boolean;
  aa_focusColor?: string;
}
export const Input = styled.input<InputFieldProps>`
  border-radius: 5px;
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 15px;
  border: ${(props) =>
    props.aa_isError
      ? "2px solid red"
      : props.aa_noBorder
      ? "none"
      : "1px solid #ccc"};
  padding-left: ${(props) => (props.aa_withIconLeft ? "4rem" : ".8rem")};
  padding-right: ${(props) => (props.aa_withIconRight ? "2rem" : ".8rem")};
  &:focus {
    box-shadow: ${(props) =>
      props.aa_isError
        ? "none"
        : props.aa_onFocusShadow
        ? "1px 1px 10px 1px rgba(205, 146, 216, 0.47)"
        : props.aa_noBorder
        ? "none"
        : props.aa_focusColor
        ? "0px 0px 1px 2px " + props.aa_focusColor
        : "0px 0px 1px 2px #c921f3"};
    border: none;
  }
  &::placeholder {
    opacity: 0.4;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

interface SearchInputProps {
  aa_focusColor?: string;
}

// SEARCH
export const SearchInput = styled.input<SearchInputProps>`
  background-color: #eee;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  font-size: 15px;
  outline: none;
  border: none;
  padding-left: calc(50% - 2rem);
  padding-right: 2rem;
  transition: all 0.3s ease-in;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 1px 2px #ccc;
    background-color: #fff;
    border: none;
    padding-left: 3rem;
  }

  &::placeholder {
    opacity: 0.4;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const SearchRightField = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  height: 34px;
  width: 30px;
`;

export const SearchRightIcon = styled.img`
  position: absolute;
  left: 7px;
  top: 10px;
  width: 15px;
  cursor: pointer;
`;

export const SearchResult = styled.div`
  top: 50px;
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 200px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: scroll;
  padding-left: 3rem;
`;

export const SearchResultContainer = styled.div`
  display: block;
  padding: 1rem 0rem;
`;

export const SearchResultLink = styled(Link)`
  text-decoration: none;
  color: #1a1a1b;
  background: #d2ebe2;
  padding: 0.5rem;
  border-radius: 5px;
`;
