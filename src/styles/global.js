import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #FFFFFF;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    #root {
        max-width: 1080px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
