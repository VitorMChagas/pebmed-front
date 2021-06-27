import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px "DM sans", sans-serif;

    *:focus {
      outline: none;
    }
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  
  @media(max-width: 1080px){
        html {
            font-size: 80%; 
        }
    }

    @media(max-width: 720px){
        html {
            font-size: 70%; 
        }
  }

`;
