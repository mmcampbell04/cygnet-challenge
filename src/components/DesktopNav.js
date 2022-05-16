import logo from "../images/logo.png";
import NavItem from "./NavItem";
import Searchbar from "./Searchbar";
import {
  DesktopNavWrapper,
  BlueBackground,
  PrimaryNav,
  Container,
  SecondaryNav,
  SecondaryNavItems,
} from "./styles/DesktopNav.styled";

const DesktopNav = ({ menuOptions }) => {
  return (
    <DesktopNavWrapper>
      <BlueBackground>
        <PrimaryNav>
          <li>
            <a href="/">Quick Order</a>
          </li>
          <li>
            <a href="/">Login Or Register</a>
          </li>
        </PrimaryNav>
      </BlueBackground>
      <Container>
        <a href="/">
          <img src={logo} alt="company logo" />
        </a>
        <Searchbar />
      </Container>
      <SecondaryNav>
        <SecondaryNavItems>
          {menuOptions.map((option) => {
            return <NavItem key={option} option={option} />;
          })}
        </SecondaryNavItems>
      </SecondaryNav>
    </DesktopNavWrapper>
  );
};

export default DesktopNav;
