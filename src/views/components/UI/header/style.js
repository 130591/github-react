import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  color: #fff;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #24292e;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 10px;

  li {
    margin: 0 10px;
    color: #fff;
    text-transform: capitalize;
  }
`;
