import { useContext } from "react";
import { data } from "../data";
import { Context } from "../Context";
import {
  StyledMain,
  StyledSection,
  ResultsSection,
} from "./styles/Main.styled";

import Card from "./Card";

const Main = () => {
  const { searchResults } = useContext(Context);

  const results = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <StyledMain>
      <StyledSection>
        <h2>
          Search Results for:
          <span> {searchResults === "" ? "" : `"${searchResults}"`}</span>
        </h2>
      </StyledSection>
      <ResultsSection>{results}</ResultsSection>
    </StyledMain>
  );
};

export default Main;
