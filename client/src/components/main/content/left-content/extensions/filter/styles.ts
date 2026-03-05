import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #2e1401;

  & .default-button {
    border: 1px solid #2e1401;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto; /* Push Shuffle to the right on desktop */
  }

  @media screen and (max-width: 768px) {
    padding: 16px 20px;
    gap: 12px;
  }

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    gap: 10px;
    padding: 14px 16px;

    & .default-button {
      order: 2;
      margin-left: auto;
    }
  }
`;

export const DropDownWrapp = styled.div`
  width: 137px;
  height: 20px;
  position: relative;
  appearance: none;
  padding: 12px 44px 12px 16px;
  border-radius: 999px;
  border: 1px solid #2e1401;
  background-color: #fff;
  color: #2e1401;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  cursor: pointer;

  & .arrow {
    position: absolute;
    top: 15px;
    right: 16px;
    cursor: pointer;
  }
`;

export const CheckBoxWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    order: 3;
    flex-basis: 100%; /* Push to new row below Dropdown + Shuffle */
  }
`;

export const Label = styled.label`
  color: #2e1401;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
