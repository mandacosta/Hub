import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    :root{
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;

        --grey-4:#121214;
        --grey-4-opc: #12121478;
        --grey-3:#212529;
        --grey-2:#343B41;
        --grey-1:#868E96;
        --grey-0:#F8F9FA;
        
    }

    .title{
        font-size:1.5rem;
        font-weight: 700;
    }

    .title.one{
        font-size: 1.125rem;
    }

    .title.two{
        font-size: 1rem;
    }

    .title.three{
        font-size: 0.875rem;
    }

    .headline{
        font-size: 0.75rem;
        font-weight: 400;
    }

    .headline.bold{
        font-weight: 700;
    }

    .headline.italic{
        font-style: italic;
    }

`;
