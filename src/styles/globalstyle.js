import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Spectral&display=swap');

    @import url('https://fonts.googleapis.com/css?family=Sacramento&display=swap');

    @import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap');

    @font-face {
        font-family: 'Athene';
        src: url('../../public/fonts/Athene.otf') format('opentype');
    }

    html {
        overflow-x: hidden;
        font-size: 1em;
    }
  
    body {
        margin: 0px;
        background: #F5F5F5;
        font-size: 15px;
        font-family: 'Spectral', serif;
        line-height: 1.8;
        font-weight: 300;
    }
`

export default GlobalStyle
