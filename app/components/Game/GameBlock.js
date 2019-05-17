import styled from 'styled-components';
import React from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { I, O, T } from '../figures';

const MyGameBlock = styled.div`
  flex: 1;
  border: 1px solid red;
  class: game-block;
  display: flex;
  background-size: cover;
  background-position: center;
`;

export function GameBlock() {
  return (
    <MyGameBlock>
      <Stage width='100' height='200'>
        <Layer>
          <Text text="Try click on rect" />
          <I horizontal/>
          <I />
          <O />
          <T />
        </Layer>
      </Stage>
    </MyGameBlock>
  );
}
