import React from 'react';
import { Rect } from 'react-konva';

export class Square extends React.Component {
  render() {
    const { x, y, side } = this.props;

    return (
      <Rect x={x} y={y} width={side} height={side} fill="red" shadowBlur={1} />
    );
  }
}
