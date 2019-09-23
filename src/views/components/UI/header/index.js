import React from "react";

// STYLES COMPONENTS
import { HeaderContainer, Logo, Nav } from "./style";
// COMPONENTS
import { Input } from "../form";
import { NavDropDown } from "./NavDropbox";
// ICONS
import logo from "../../../../assets/icons/Github.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <Input placeholder="Search or jump to..." />
      <Nav>
        <li>pull request</li>
        <li>issues</li>
        <li>marktplace</li>
        <li>explore</li>
      </Nav>
      <NavDropDown />
    </HeaderContainer>
  );
};
