import { createGlobalStyle } from "styled-components";
import { color } from "./theme";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SUITE';
    src: url('/SUITE-Variable.woff2');
    
  }

  *{
    margin: 0;
    padding: 0;
    font-family: 'SUITE';
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    user-select: none;
    -webkit-touch-callout: none;
    box-sizing: border-box;
    color: ${color.Black.Text};
  }

  *::-webkit-scrollbar {
    display: none;
  }

  input,
  textarea {
    outline: none;
  }
`;
