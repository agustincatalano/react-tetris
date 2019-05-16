import React from 'react';
import {Square} from './Square'

export class HI extends React.Component {
  render() {
    const side = 10;
    const x = 50;
    const y = 50;
    const border = 1;

    return (
      <>
        <Square x={x} y={y} side={side} />
        <Square x={x} y={y} side={side} />
        
      </>
    );
  }
}
