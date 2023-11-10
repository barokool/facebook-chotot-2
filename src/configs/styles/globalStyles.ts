import { createGlobalStyle } from "styled-components";
// import font

import PretendardVariable from "../../assets/fonts/Poppins-Regular.ttf";
export const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: 'Pretendard-Variable';
    src: url(${PretendardVariable}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }


  * {
    margin: 0;
    font-family: 'Pretendard-Variable';
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
    *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
&::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    height: 4px;
    display: block;
  }
  &::-webkit-scrollbar-thumb {
    max-width: 230px;
    /* background-color: ${(props) => props.theme.colors.primary500}; */
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(180, 185, 171, 0.3);
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  html {
    font-size: 16px;
    @media (max-width: ${(props) => props.theme.breakPoint.lg}px) {
      font-size: 13px;
    }
  }
  // main #f8f6f2
  // main sub #fdfcfb
  // sub2
  body {
    height: 100%;
    /* background-color: #121212; */
    /* background-color: #f8f6f2; */
    #root {
      @media(max-width : 540px) {
        /* background-color: #121212; */
      }
    }
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
    border: none;
    outline: none;
  }

  /* h1,h2,h3, h4 , h5 , h6 , a , p , span , li , ul , ol , input , textarea , button , select , option , label , div , img , svg , path , g , rect , circle , ellipse , line , polyline , polygon , nav , section , article , header , footer , main , aside , form , fieldset , legend , pre , code , table , caption , tbody , thead , tfoot , tr , th , td , iframe , audio , video , canvas , time , address , details , summary , figure , figcaption , blockquote , q , cite , dfn , abbr , small , strong , em , sub , sup , mark , del , ins , strike , samp , kbd , var , bdo , ruby , rt , rp , tt , b , u , i , center , s , wbr , noscript , menu , command , keygen , output , progress , meter , details , summary , menuitem , summary , template , slot , sha { 
    color : black !important;
  } */

  html, body,
  h1, h2, h3, h4, h5, h6,
  a, p, span,
  em, small, strong,
  sub, sup,
  mark, del, ins, strike,
  abbr, dfn,
  blockquote, q, cite,
  code, pre,
  ol, ul, li, dl, dt, dd,
  div, section, article,
  main, aside, nav,
  header, hgroup, footer,
  img, figure, figcaption,
  address, time,
  audio, video,
  canvas, iframe,
  details, summary,
  fieldset, form, label, legend,
  table, caption,
  tbody, tfoot, thead,
  tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
  }
  
  img, video, picture, canvas {
  max-width: 100%;
  }

  overflow-x: hidden;
  overflow-y: auto;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  button:hover { 
    opacity: 0.7;
  }

  
`;
