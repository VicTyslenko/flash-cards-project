import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  & .tabs_btn {
    border: none;
  }
  & .tabs_btn:hover {
    border: 1px solid #2e1401;
  }
  & .btn_active {
    background-color: #f8cb46;
    border: 1px solid #2e1401;
    cursor: default;
  }

  & .default-typography {
    font-weight: 600;
    color: #2e1401;
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;

    & .default-typography {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 16px;

    & .default-typography {
      font-size: 16px;
    }
  }
`;

export const LogoWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonsWrapp = styled.div`
  padding: 4px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 2px 0px 0px #2e1401;
  border: 1px solid #2e1401;
  gap: 4px;

  @media screen and (max-width: 768px) {
    & .default-button {
      padding: 10px 16px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    & .default-button {
      min-width: auto;
      padding: 10px 12px;
      font-size: 13px;
    }
  }
`;
