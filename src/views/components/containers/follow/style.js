import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #D1D5DA;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: flex-start;
`;

export const Holder = styled.div`
  font-size: 16px;
  line-height: 1.5em;
  color: #24292e;

  span {
    font-size: 14px;
    line-height: 1.5em;
    color: #586069;
  }
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 1.5em;
  color: #586069;
`;

export const Location = styled.div`
  font-size: 14px;
  line-height: 1.5em;
  color: #586069;
`;