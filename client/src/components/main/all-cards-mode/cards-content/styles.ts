import styled, { keyframes } from "styled-components";

export const CardsContentWrapp = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const LoadingWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 64px 0;
`;

export const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #f3d9f8;
  border-top-color: #fc8ae5;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadingText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #2e1401;
  opacity: 0.7;
`;

export const ButtonWrapp = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-bottom: 64px;

  & .default-button {
    border-radius: var(--corner-radius-full, 999px);
    border: 1px solid var(--colors-neutral-900, #2e1401);
    background: var(--colors-neutral-0, #fff);
    box-shadow: 2px 2px 0 0 var(--colors-neutral-900, #2e1401);
  }
`;
