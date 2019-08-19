import styled from "styled-components";
import { Details } from "../card/style";

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
  margin-left: 50px;
  margin-right: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 10px;
  list-style: none;

  li {
    margin: 0 10px;
    color: #fff;
    text-transform: capitalize;
  }
`;

export const Drop = styled.div`
  width: 80px;
  margin-right: 30px;
  margin-left: auto;
`;

export const DetailsNav = styled.div`
  position: relative;
  right: 50px;

  div {
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 4px;
    box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);
    left: 0;
    list-style: none;
    margin-top: 2px;
    padding-bottom: 10px;
    padding-top: 10px;
    position: absolute;
    top: 100%;
    width: 180px;
    z-index: 5;
  }
`;

export const SummaryMenu = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  .header {
    width: 100%;
    font-size: 0.9em;
    padding-bottom: 0;
    color: #24292e;
    text-align: center;
  }

  .status {
    width: 100%;

    span {
      border: 1px solid #e1e4e8;
      padding: 5px 15px;
      text-align: center;
      color: #24292e;
      margin: 0 auto;
    }
  }
`;
