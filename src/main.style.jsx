import { createGlobalStyle } from "styled-components";
import colors from './utils/styles/colors';

export const GlobalStyle = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        font-family: Arial, sans-serif;
        background: ${colors.primary};
        color: ${colors.secondary};
    }
`;

