// spell:disable
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --lightBlue: #0095F7;
    --darkBlue: #385185;
    --grey: #8E8E8E;
    --greyBG: #fafafa;
    --red: #e93626;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    z-index: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #1a1a1b;
    font-size: 14px;
    background-color: ${(props) => props.theme.bg};
  }

  textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  resize: none;
  }

  input {
    &::placeholder{
      color: #ccc;
    }
  }
`;
