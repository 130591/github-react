import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  background: #24292e;
  color: #fff;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  position: fixed;
  width: 100%;
`

export const Title = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0 10px 0;
`

export const LoginLink = styled.a`
  color: #fff;
  font-size: 16px;
  &:hover {
    color: #ccc;
  }
`
export const Logo = styled.svg`
  fill: #fff;
`
