import styled from "styled-components";

export const YoursRepos = styled.div`
  margin-top: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #d1d5da;
  border-bottom: 1px solid #d1d5da;

  ul {
    margin-top: 15px;
    display: flex;
    font-weight: 400;
    line-height: 1.4em;
    color: #24292e;
  }

  ul li {
    padding-right: 5px
    font-size: 1em;
    color: #586069;
  }
`;

export const InfoRepors = styled.div`
  display: flex;
  width: 100%;
  padding-top: 20px;
  align-items: center;
  justify-content: flex-start;

  & .yellowcircule {
    height: 12px;
    width: 12px;
    margin-right: 5px;
    top: 2px;
    position: relative;
    border-radius: 50%;
    background: rgb(241, 224, 90);
  }

  span {
    width: 150px;
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: #586069;
    line-height: 1.4em;
    text-transform: capitalize;

    i {
      padding-left: 20px;
      padding-right: 4px;
    }

    .currentime {
      font-size: 12px;
      color: rgb(88, 96, 105);
      margin-left: 10px;
      margin-bottom: 0px;
    }
  }
`;
