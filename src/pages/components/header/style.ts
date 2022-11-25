import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 200px;
  background-color: var(--grey-4);

  .top {
    height: 70px;
    border-bottom: 1px solid var(--grey-3);
  }

  nav {
    width: 90%;
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: var(--color-primary);
  }

  .bottom {
    height: 130px;
    color: var(--grey-0);
    border-bottom: 1px solid var(--grey-3);
  }

  section {
    width: 90%;
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) {
    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
