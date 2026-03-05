import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(46, 20, 1, 0.7);
`;

export const ModalInner = styled.div`
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 480px) {
    max-width: calc(100vw - 24px);
    max-height: calc(100vh - 24px);
  }
`;
