import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --light-cyan:  hsl(193, 38%, 86%);
        --neon-green: hsl(150, 100%, 66%);
        --grayish-blue: hsl(217, 19%, 38%);
        --dark-grayish-blue: hsl(217, 19%, 24%);
        --dark-blue: hsl(218, 23%, 16%);
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Manrope', sans-serif;
        background-color: var(--dark-blue);
        color: var(--grayish-blue);
    }
`;

export default GlobalStyle;