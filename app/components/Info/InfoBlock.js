import styled from 'styled-components';
import React from 'react';
import infoImage from '../../images/info-image.jpg';
import Score from './Score';
import LineCounter from './LineCounter';
import NextTetromino from './NextTetromino';
import Arrows from './Arrows';

export const MyInfoBlock = styled.div`
  width: 200px;
  border: 1px solid blue;
  background-image: url(${infoImage});
  background-size: cover;
`;

// use StartGame in here somehow

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
