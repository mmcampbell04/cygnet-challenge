import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2em;
  max-height: 3em;
  width: 50%;
  border: 1px solid #ebebeb;
  border-radius: 25px;
  color: #55a5b5;
  background: white;

  &:focus-within {
    outline: 2px solid #55a5b5;
  }

  input {
    width: 100%;
    border: none;
    font-size: 0.75rem;
    color: #464646;
    padding-block: 0.875em;
  }

  input:focus {
    outline: none;
  }

  button {
    color: #55a5b5;
    font-size: 1.25rem;
  }
`;
