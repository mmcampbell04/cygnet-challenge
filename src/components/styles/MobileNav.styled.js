import styled from "styled-components";
import { Flex, Modal } from "./Layouts.styled";

export const StyledMobileNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid #f8c991;
  img {
    width: 40%;
  }

  button {
    color: #55a5b5;
    margin-left: 0.5em;
    font-size: 1.75rem;
  }
`;

export const NavList = styled.ul`
  ${Modal}

  transform: ${(props) =>
    props.isNavOpen ? "translateX(0%)" : "translateX(150%)"};

  li {
    font-size: 0.875rem;
    padding: 1em;
    transition: all 0.2s ease-in-out;
  }

  li:hover,
  li:focus {
    color: black;
    background: lightgrey;
  }
`;

export const SearchWrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-end;
  gap: 2em;
  padding: 1em;
  ${Modal}

  transform: ${(props) =>
    props.searchModalOpen ? "translateX(0%)" : "translateX(-150%)"};

  form {
    align-self: center;
    width: 90%;
  }
`;
