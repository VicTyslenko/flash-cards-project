import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: auto;
    overflow: visible;
  }
`;
