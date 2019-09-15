import React from 'react';
import styled from 'styled-components';
import { View } from 'wasabi-kit';

const Badge = styled(View)`
  width: 90%;
  max-width: 90%;
  color: white;
  border-top-left-radius: 35px;
  border-bottom-right-radius: 35px;
  font-size: 16px;
  min-width: 100px;
  margin: 10px auto;
  padding: 10px;
  box-shadow: 0px 4px 10px -1px rgba(0,0,0,0.68);
  @media (min-width: 500px) {
    width: 260px;
  }
`;

export default Badge;
