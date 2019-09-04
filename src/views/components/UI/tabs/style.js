import styled from "styled-components";

export const TabContent = styled.section`
  width: 100%;
  margin-left: 45px;
`;

export const TabList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 5px 12px;
  padding-bottom: 20px;
  overflow: hidden;
  border-bottom: 1px solid #d1d5da;
`;

export const TabNav = styled.div`
  color: #24292e;
  font-weight: 400;
  line-height: 1.4em;
  margin-left: 30px;
  text-transform: capitalize;

  span {
    color: #586069;
    border-radius: 20px;
    padding: 2px 5px;
    font-size: 12px;
    font-weight: 600;
    background-color: rgba(27, 31, 35, 0.08);
  }
`;

export const LinkTitle = styled.a`
  text-decoration: none;
  color: #0366d6;
  line-height: 21px;
  font-weight: 600;
  padding-top: 20px;
`;

export const TitleCard = styled(LinkTitle)`
  font-size: 1.4em;
`;

export const TitleSection = styled.h2`
  margin-top: 15px;
  margin-bottom: -5px;
  font-size: 1.1em;
  color: #24292e;
  line-height: 1.5em;
  font-weight: 400;
  padding-top: 10px;
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


export const TabPainel = styled.div`
  width: 100%;
`;