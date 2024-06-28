import { createGlobalStyle } from "styled-components";
import { pixelToRem } from "../utils/functions";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        @media(max-width: 1440px){
            /* font-size: 93.75%; */
        }

        @media(max-width: 375px){
            /* font-size: 87.5%; */
        }
    }

    body{
        -webkit-font-smoothing: antialised;
        background-color: var(--background);
    }
    
    body, input, textarea, button{
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
    }

    :root{
        --white: #ffffff;
        --black: #000;
        --background: #131119;
        --purple: #8872E7;
        --dark-purple: #402C97;
        --gold: #B9971E;
        --card: #1F1C29;
        --button-card: #282530;
        --gray: #C1BDD4;


        --font-logo: 700 ${pixelToRem(40)}/${pixelToRem(46)} "Ubuntu", sans-serif;
        --font-title: 700 ${pixelToRem(55)}/${pixelToRem(52)} "Ubuntu", sans-serif;
        --font-sub: 400 ${pixelToRem(20)}/${pixelToRem(20)} "Ubuntu", sans-serif;
        --font-button: 400 ${pixelToRem(18)}/${pixelToRem(30)} "Ubuntu", sans-serif;
    }
`;