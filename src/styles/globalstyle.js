import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Athene';
        src: url('../../public/fonts/Athene.otf');
    }

    html {
        overflow-x: hidden;
        font-size: 1em;
    }
  
    body {
        margin: 0px;
        background: #F5F5F5;
        font-size: 18px;
        font-family: "Calibri";
        line-height: 1.8;
        color: black;
        font-weight: 300;
    }
`

export default GlobalStyle
