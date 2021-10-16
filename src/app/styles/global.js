import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html, body {
        margin: 0;
        padding: 0;
        outline: none;
        font-family: sans-serif;
        background-color: #0cbaba;
        background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
    }

`;
