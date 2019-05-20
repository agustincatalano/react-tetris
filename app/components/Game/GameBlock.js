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

const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'pink']
const size = 25

const getNextColor = ()=>{
  return colors[Math.floor(Math.random() * colors.length)];
}

export function GameBlock() {
  return (
    <MyGameBlock>
      <Stage width="800" height="400">
        <Layer>
          <Text text="Try click on rect" />
          <I horizontal color={getNextColor()} size={size}/>
          <I />
          <O color={getNextColor()}/>
          <T />
        </Layer>
      </Stage>
    </MyGameBlock>
  );
}
