import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

    @import url('https://fonts.googleapis.com/css?family=Raleway:500&display=swap');

    @import url('https://fonts.googleapis.com/css?family=Raleway:700&display=swap');

    @import url('https://fonts.googleapis.com/css?family=Lusitana:400,700&display=swap');

    @font-face {
        font-family: 'Athene';
        src: url('../../public/fonts/Athene.otf') format('opentype');
    }

    html {
        overflow-x: hidden;    
    }
  
    body {
        margin: 0px;
        background: white;
        font-size: 15px;
        font-family: 'Lusitana', serif;
    }
`

export default GlobalStyle
