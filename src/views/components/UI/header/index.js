import React from "react";

// STYLES COMPONENTS
import { HeaderContainer, Logo, Nav } from "./style";
// COMPONENTS
import { Input } from "../form";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={""} alt="alt" />
      <Input placeholder="Search or jump to..." />
      <Nav>
        <li>pull request</li>
        <li>issues</li>
        <li>marktplace</li>
        <li>explore</li>
      </Nav>
    </HeaderContainer>
  );
};
