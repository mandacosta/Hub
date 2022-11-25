import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  height: fit-content;
  background-color: var(--grey-3);
  padding: 20px 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    cursor: pointer;
    width: 100%;
    padding: 15px;
    background-color: var(--grey-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;

    .title {
      width: 50%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      width: 50%;
      max-width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background-color: transparent;
        border: none;
        margin-left: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  li:hover {
    background-color: var(--grey-2);
    font-weight: 700;
  }
`;
