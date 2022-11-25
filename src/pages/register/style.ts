import styled from "styled-components";

export const StyledSection = styled.section`
  width: 90%;
  max-width: 370px;
  height: 90%;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: var(--color-primary);
    }
  }

  form {
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: var(--grey-3);
    color: var(--grey-0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    div {
      height: 50px;
      display: flex;
      flex-direction: column;
    }

    label {
      width: 100%;
      display: flex;
      justify-content: space-between;

      span:nth-child(2) {
        color: var(--color-primary);
        font-weight: 400;
        font-size: 0.625rem;
      }
    }
  }
`;
