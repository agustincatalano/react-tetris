import styled from 'styled-components';
import React from 'react';

const MyGameBlock = styled.div`
  flex: 1;
  border: 1px solid red;
  class: game-block;
  display: flex;
  background-size: cover;
  background-position: center;
`;

export function GameBlock() {
  return <MyGameBlock>This is GameBlock </MyGameBlock>;
}
