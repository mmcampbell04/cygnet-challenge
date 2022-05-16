import styled from "styled-components";
import { Grid } from "./Layouts.styled";

export const StyledMain = styled.main`
  ${Grid}
  padding-block: 3.25em;
  background: #fbfbfb;
`;

export const StyledSection = styled.section`
  grid-column: 2/-2;

  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5625;
    color: #3c3c3c;
    font-weight: 300;
  }

  span {
    font-weight: 700;
  }
`;

export const ResultsSection = styled(StyledSection)`
margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(16rem,1fr));
    gap: 1em;
    
    
}
`;
