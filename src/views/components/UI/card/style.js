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
    margin-bottom: 15px;
    text-transform: capitalize;
  }
`;

export const CardInfo = styled.ul`
  height: 25px;
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Details = styled.li`
  font-size: 1em;
  color: #24292e;
  font-weight: 500;
  line-height: 1.4px;
`;

// CARD DEFAULT

export const Box = styled.div`
  width: 48%;
  padding: 10px 15px;
  padding-top: 15px;
  border-radius: 4px;
  margin-top: 15px;
  border: 1px solid #d1d5da;
`;

export const CardNavBody = styled.div`
  p {
    font-size: 0.85em;
    color: #586069;
    line-height: 1.5em;
    font-weight: 400;
    padding-top: 10px;
  }

  ul {
    width: 40%;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  ul li {
    font-size: 0.85em;
    color: #586069;
    line-height: 1.5em;
    font-weight: 400;
  }
`;
