import { createGlobalStyle } from "styled-components";
import variables from "./Variables";

const GlobalStyle = createGlobalStyle`
  ${variables};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  html, body {
    min-height: 100%;
    scroll-behavior: smooth;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.primary};
  }

  p{
    color:  ${(props) => props.theme.primary};
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: clamp(0.5rem, 3vw, 1.1rem);
    letter-spacing: 0.1rem;
    line-height: 1.5;
  }


  h1,h2 {
    font-family: 'Bodoni Moda', serif;
    /* font-family: 'Prompt', sans-serif; */
    font-weight: 700;
    font-size: clamp(2rem, 6vw, 6rem);
    color: ${(props) => props.theme.primary};
    margin: 0px 50px;
    line-height:1;

  }
  

  h3 {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 300;
    font-size: clamp(0.5rem,3.5vw,1.25rem);
    color: ${(props) => props.theme.secondary};
    
  }

  span {
    color: ${(props) => props.theme.secondary};
  }
  
`;

export default GlobalStyle;
