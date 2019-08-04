import styled from "styled-components";

// CARD PROFILE
export const CardContent = styled.div`
  width: 100%;
`;

export const Avatar = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 5px;
  background-size: cover;
`;

export const CardBody = styled.div`
  padding-top: 10px;

  h2 {
    font-size: 1.85em;
    font-weight: 600;
    color: #24292e;
    line-height: 30px;
    text-transform: capitalize;
  }

  h3 {
    font-size: 1.4em;
    font-weight: 300;
    color: #666666;
    line-height: 24px;
    text-transform: capitalize;
  }
`;

export const CardInfo = styled.ul`
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: red;
`;

export const Details = styled.li`
  font-size: 1em;
  color: #24292e;
  font-weight: 400;
  line-height: 1.4px;
`;

// CARD DEFAULT
