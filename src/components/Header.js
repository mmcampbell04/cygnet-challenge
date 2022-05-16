import { useContext } from "react";
import { Context } from "../Context";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
  const { isMobile } = useContext(Context);

  const menuOptions = [
    "Machine Parts",
    "Equipment",
    "Water Treatment",
    "Barista Tools",
  ];

  return (
    <StyledHeader>
      {isMobile ? (
        <MobileNav menuOptions={menuOptions} />
      ) : (
        <DesktopNav menuOptions={menuOptions} />
      )}
    </StyledHeader>
  );
};

export default Header;
