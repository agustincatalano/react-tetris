import React from 'react';
import { Square } from './Square';

export class L extends React.Component {
  render() {
    const side = 10;
    const x = 200;
    const y = 30;
    const border = 1;

    return (
      // L position one
      // <>
      //   <Square x={x} y={y} side={side} />
      //   <Square x={x} y={y + side + border} side={side} />
      //   <Square x={x} y={y + 2 * (side + border)} side={side} />
      //   <Square x={x + side + border} y={y + 2 * (side + border)} side={side} />
      // </>

      // position 2
      // <>
      //   <Square x={x+side+border} y={y} side={side} />
      //   <Square x={x+side+border} y={y + side + border} side={side} />
      //   <Square x={x+side+border} y={y + 2 * (side + border)} side={side} />
      //   <Square x={x} y={y + 2 * (side + border)} side={side} />
      // </>


      // // position 3
      <>
        <Square x={x + (2*side) + border} y={y} side={side} />
        <Square x={x+side+border} y={y} side={side} />
        <Square x={x+side+border} y={y + side + border} side={side} />
        <Square x={x+side+border} y={y + 2 * (side + border)} side={side} />
        
      </>

      // position 4
      // <>
      //   <Square x={x + (2*side) + border} y={y} side={side} />
      //   <Square x={x+side+border} y={y} side={side} />
      //   <Square x={x+2*side+border} y={y + side + border} side={side} />
      //   <Square x={x+2*side+border} y={y + 2 * (side + border)} side={side} />
        
      // </>
    );
  }
}
