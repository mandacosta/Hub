import { createGlobalStyle } from "styled-components";

export const ButtonsStyle = createGlobalStyle`
    
    .btn{
        width: 100%;
        height: 40px;
        border-radius:4px;
        border: none;
        color: var(--grey-0);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content:center;
        text-decoration:none;
    }

    .btn.primary{
        background-color: var(--color-primary);
    }

    .btn.primary:hover{
        background-color: var(--color-primary-focus);
    }

    .btn.primary:disabled{
        background-color: var(--color-primary-negative);
    }

    .btn-secondary{
        width: fit-content;
        height: 40px;;
        padding-inline: 10px;
        border-radius:4px;
        background-color: var(--grey-3);
        border: none;
        color: var(--grey-0);
        display: flex;
        align-items: center;
        justify-content:center;
        text-decoration:none;
        cursor: pointer;
    }

    .btn-secondary:hover{
        background-color: var(--grey-2);
    }

    .btn.tertiary{
        background-color: var(--grey-1);
        display: flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
    }
`;
