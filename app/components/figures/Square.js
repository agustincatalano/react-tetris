import React from 'react';
import { Rect } from 'react-konva';

export class Square extends React.Component {
  render() {
    const { x, y, side, color = 'white' } = this.props;

    return (
      <Rect
        x={x}
        y={y}
        width={side}
        height={side}
        fill={color}
        shadowBlur={1}
      />
    );
  }
}
