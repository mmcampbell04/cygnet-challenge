import styled from "styled-components";
import { Grid } from "./Layouts.styled";

export const DesktopNavWrapper = styled.div`
  width: 100%;
  ${Grid};
`;

export const BlueBackground = styled.nav`
  grid-column: 1/4;
  ${Grid};
  background: #55a5b5;
  padding-block: 1em;
`;

export const PrimaryNav = styled.ul`
  grid-column: 2/-2;
  display: flex;
  justify-content: flex-end;
  color: white;
  text-transform: uppercase;
  font-weight: 700;

  li:first-child {
    margin-right: 3em;
  }

  a:focus {
    outline: 2px solid #ffffff;
  }
`;

export const Container = styled.div`
  grid-column: 2/-2;
  display: flex;
  align-items: center;
  margin-block: 2em;

  a {
    width: 25%;
    margin-right: 4em;
  }
`;

export const SecondaryNav = styled.nav`
  grid-column: 1/4;
`;

export const SecondaryNavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.6em;
  border-block: 1px solid #e5e5e5;
  font-weight: 700;

  li {
    position: relative;
    border-bottom: ${(props) => (props.isActive ? "1px solid orange" : "")};
  }

  li::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 5px;
    background: orange;
    bottom: -53%;
    left: 10%;
    visibility: hidden;

    transform: scaleX(0);
    transition: 0.4s ease-in-out;
  }

  li:hover::after {
    visibility: visible;
    transform: scaleX(1);
  }
`;
