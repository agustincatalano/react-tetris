import React from 'react';
import { Square } from './Square';

export class O extends React.Component {
  render() {
    const side = 10;
    const x = 70;
    const y = 70;
    const border = 1;

    return (
      <>
        <Square x={x} y={y} side={side} />
        <Square x={x} y={y + side + border} side={side} />
        <Square x={x+side + border} y={y} side={side} />
        <Square x={x+side+ border} y={y+side + border} side={side} />
      </>

    );
  }
}
