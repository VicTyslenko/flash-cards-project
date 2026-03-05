import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  box-sizing: border-box;
  background-color: #fff;
  flex: 1;
  border-radius: 16px;
  outline: 3px solid #2e1401;
  outline-offset: -3px;
  height: fit-content;

  & .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 768px) {
    flex: none;
    width: 100%;
    padding: 20px;

    & .title {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 16px;

    & .title {
      font-size: 18px;
      margin-bottom: 12px;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
