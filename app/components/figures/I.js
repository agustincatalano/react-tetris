import React from 'react';
import {Square} from './Square'

export class I extends React.Component {
  render() {
    const side = 10;
    const x = 20;
    const y = 20;
    const border = 1;

    return (
      <>
        <Square x={x} y={y} side={side} />
        <Square x={x} y={y + side + border} side={side} />
        <Square x={x} y={y + 2 * (side + border)} side={side} />
        <Square x={x} y={y + 3 * (side + border)} side={side} />
      </>
    );
  }
}
