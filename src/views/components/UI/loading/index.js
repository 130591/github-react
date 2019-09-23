import React from 'react';
import styled from 'styled-components';

import loading from '../../../../assets/icons/octocat.svg';

const Img = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 45%;
`;

export const Loading = () => {
  return (
    <Img src={loading} alt="loading" />
  )
}

