import { createGlobalStyle } from "styled-components";

export const InputStyle = createGlobalStyle`
    .input_default{
        width:100%;
        height: 40px;
        background-color: var(--grey-2);
        border: 1px solid transparent;
        border-radius: 4px;
        padding: 0px 16px 0px 16px;
        color: var(--grey-0);
        
        
        
    }

    .input_defalut:focus{
        border: 1px solid var(--grey-0);
        outline: none;
        
    }
`;
