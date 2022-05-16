import styled, { css } from "styled-components";

export const Grid = css`
  display: grid;
  grid-template-columns: minmax(2em, 1fr) minmax(0px, 70em) minmax(2em, 1fr);
`;

export const Flex = styled.div`
  display: flex;
`;

export const Modal = css`
  position: absolute;
  z-index: 10;
  background: #fbfbfb;
  top: 1.5%;
  left: 0;
  width: 100vw;
  height: 13rem;
  transition: transform 0.5s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
`;
