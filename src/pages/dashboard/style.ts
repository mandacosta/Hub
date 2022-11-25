import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4);

  h3 {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 26px;
      text-align: center;
      padding-bottom: 5px;
    }
  }
`;

export const StyledSection = styled.section`
  width: 90%;
  max-width: 900px;
  margin: 30px auto 0 auto;
  color: var(--grey-0);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
