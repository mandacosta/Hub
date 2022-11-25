import styled from "styled-components";
import { css } from "styled-components";

interface iLoadingProps {
  loading: string;
}

export const StyledLoading = styled.div<iLoadingProps>`
  ${({ loading }) => {
    if (loading === "false") {
      return css`
        display: none;
      `;
    } else {
      return css`
        display: flex;
      `;
    }
  }}

  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #561e2c7d;
  justify-content: center;
  align-items: center;

  div {
    width: 80px;
    height: 80px;
    border: 10px solid var(--grey-0);
    border-bottom: 10px solid var(--color-primary);
    border-radius: 50%;
    animation: rotation 1s infinite;
  }

  @keyframes rotation {
    to {
      transform: rotate(360deg);
    }
  }
`;
