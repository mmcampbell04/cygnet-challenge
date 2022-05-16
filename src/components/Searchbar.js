import { useContext, useState } from "react";
import { Context } from "../Context";
import { StyledForm } from "./styles/Searchbar.styled";
import { HiSearch } from "react-icons/hi";

const Searchbar = () => {
  const [userInput, setUserInput] = useState("");
  const { getSearchTerms, closeSearchModal } = useContext(Context);

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getSearchTerms(userInput);
    setUserInput("");
    closeSearchModal();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="search"
        id="search"
        value={userInput}
        onChange={handleChange}
        placeholder="Search over 14,000 products & parts"
      />
      <button>
        <HiSearch />
      </button>
    </StyledForm>
  );
};

export default Searchbar;
