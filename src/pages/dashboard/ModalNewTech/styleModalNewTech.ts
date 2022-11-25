import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4-opc);
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 90%;
    max-width: 370px;
    height: fit-content;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--grey-2);
      color: var(--grey-0);
      padding: 10px 16px;
      border-radius: 4px 4px 0 0;

      button {
        font-size: 22px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: var(--grey-0);
      }
    }

    form {
      width: 100%;
      height: fit-content;
      padding: 16px 16px;
      background-color: var(--grey-3);
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-radius: 0 0 4px 4px;

      label {
        color: var(--grey-0);
      }
    }
  }
`;
