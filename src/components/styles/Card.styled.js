import styled from "styled-components";
import { Flex } from "./Layouts.styled";

export const StyledCard = styled.article`
  border: 1px solid #d0d0d0;
  background: #ffffff;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));

  &:hover {
    border: 2px solid #3a808e;
  }
`;

export const CardHeader = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 601px) {
    align-items: flex-start;
  }
`;

export const Photo = styled.img`
  width: 100%;
`;

export const PartCode = styled.h4`
  font-weight: 700;
  font-size: 0.875rem;
`;

export const PartName = styled.p`
  text-transform: uppercase;
  font-size: 0.875rem;
`;

export const IconWrapper = styled(Flex)`
  width: 100%;
  margin-block: 0.5em;
  justify-content: center;
  align-items: center;
  border-block: 1px solid #e8eade;
  padding: 0.5em;
  height: 47px;
  gap: 0.25em;
`;

export const Price = styled.p`
  font-weight: 700;
  align-self: center;
`;

export const AddToCartWrapper = styled(Flex)`
  justify-content: center;
  gap: 1px;

  input {
    width: clamp(17%, 5vw, 25%);
    aspect-ratio: 1.25/1;
    border: 1px solid #b8c6c9;
    font-size: 0.75rem;
    text-align: center;
    margin-right: 0.2em;
  }
`;
