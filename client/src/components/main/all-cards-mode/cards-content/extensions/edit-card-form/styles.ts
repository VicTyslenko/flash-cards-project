import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 32px;
  width: min(600px, calc(100vw - 32px));
  box-sizing: border-box;
  border-radius: var(--corner-radius-16, 16px);
  border-top: 1px solid var(--colors-neutral-900, #2e1401);
  border-right: 4px solid var(--colors-neutral-900, #2e1401);
  border-bottom: 4px solid var(--colors-neutral-900, #2e1401);
  border-left: 1px solid var(--colors-neutral-900, #2e1401);
  background: var(--colors-neutral-0, #fff);

  & .default-typography {
    color: var(--colors-neutral-900, #2e1401);
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 768px) {
    & .default-typography {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 20px 16px;

    & .default-typography {
      font-size: 18px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  color: var(--colors-neutral-900, #2e1401);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
`;

export const Input = styled.input`
  border-radius: var(--corner-radius-6, 6px);
  border: 1px solid var(--colors-neutral-900, #2e1401);
  background: var(--colors-neutral-0, #fff);
  padding: 16px;
  width: 100%;
  max-width: 409px;
  box-sizing: border-box;

  &::placeholder {
    color: var(--colors-neutral-900, #2e1401);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
    padding: 12px 14px;
  }
`;

export const TextArea = styled.textarea`
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid var(--colors-neutral-900, #2e1401);
  background: var(--colors-neutral-0, #fff);
  min-height: 100px;
  resize: vertical;

  &::placeholder {
    color: var(--colors-neutral-900, #2e1401);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 14px;
  }
`;

export const ButtonWrapp = styled.div`
  display: flex;
  justify-content: flex-end;

  & .default-button {
    background-color: #f8cb46;
  }
`;
