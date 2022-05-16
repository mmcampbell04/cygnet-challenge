import { useContext } from "react";
import { Context } from "../Context";
import { Flex } from "./styles/Layouts.styled";
import NavItem from "./NavItem";
import Searchbar from "./Searchbar";

import {
  StyledMobileNav,
  NavList,
  SearchWrapper,
} from "./styles/MobileNav.styled";
import logo from "../images/logo.png";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";

const MobileNav = ({ menuOptions }) => {
  const { isNavOpen, toggleNav, searchModalOpen, toggleSearchModal } =
    useContext(Context);

  return (
    <StyledMobileNav>
      <a href="/">
        <img src={logo} alt="company logo" />
      </a>
      <Flex>
        <button>
          <HiSearch onClick={toggleSearchModal} />
        </button>
        <button onClick={toggleNav}>{isNavOpen ? <HiX /> : <HiMenu />}</button>
      </Flex>

      <NavList isNavOpen={isNavOpen}>
        {menuOptions.map((option) => {
          return <NavItem key={option} option={option} />;
        })}
      </NavList>
      <SearchWrapper searchModalOpen={searchModalOpen}>
        <Searchbar />
      </SearchWrapper>
    </StyledMobileNav>
  );
};

export default MobileNav;
