import styled from "styled-components";

export const AppWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 24px 20px; /* Default padding for all screens */
  height: 100vh;
  overflow: auto;

  /* Tablet */
  @media screen and (max-width: 768px) {
    padding: 20px 16px 40px;
  }

  /* Mobile */
  @media screen and (max-width: 480px) {
    padding: 12px 12px 40px;
  }
`;
