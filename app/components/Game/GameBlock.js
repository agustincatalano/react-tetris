import styled from 'styled-components';
import React from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { I, O, T, L } from '../figures';

const MyGameBlock = styled.div`
  flex: 1;
  border: 1px solid red;
  class: game-block;
  display: flex;
  background-size: cover;
  background-position: center;
`;

const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'pink'];
const size = 25;

const getNextColor = () => colors[Math.floor(Math.random() * colors.length)];

export function GameBlock() {
  let rotation = 0;

  const rotate = () => {
    console.log('rotate', rotation);

    if (rotation === 4) {
      rotation = 0;
    }
    rotation += 1;
  };
  setInterval(rotate, 1000);

  return (
    <MyGameBlock>
      <Stage width="800" height="400">
        <Layer>
          <Text text="Try click on rect" />
          <I horizontal color={getNextColor()} size={size} />
          <I />
          <O color={getNextColor()} />
          <T position={rotation} />
          <L position={0} />
        </Layer>
      </Stage>
    </MyGameBlock>
  );
}
