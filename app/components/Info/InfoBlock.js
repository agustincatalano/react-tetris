import styled from 'styled-components';
import React from 'react';
import { Score } from './Score';
import { LineCounter } from './LineCounter';
import { NextTetromino } from './NextTetromino';
import { Arrows } from './Arrows';

const MyInfoBlock = styled.div`
  width: 200px;
  border: 1px solid blue;
  background-size: cover;
`;

export function InfoBlock() {
  return (
    <MyInfoBlock>
      {'this is the info container'}

      <Score>this is the Score Component</Score>
      <LineCounter>this is the LineScore Component</LineCounter>
      <NextTetromino>this is the NextTetromino Component</NextTetromino>
      <Arrows>this is the Arrows Component</Arrows>
    </MyInfoBlock>
  );
}
