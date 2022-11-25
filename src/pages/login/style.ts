import styled from "styled-components";

export const StyledSection = styled.section`
  width: 90%;
  max-width: 370px;
  height: 50%;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  h1 {
    width: 100%;
    text-align: center;
    color: var(--color-primary);
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    h2 {
      width: 100%;
      text-align: center;
    }

    div {
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
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
