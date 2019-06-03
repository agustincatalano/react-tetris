import React from 'react';
import { Square } from './Square';

export class T extends React.Component {
  render() {
    const side = 10;
    const x = 10;
    const y = 120;
    const border = 1;
    const { position } = this.props;


    if (position === 1) {
      return (
        // position 1
        <>
          <Square x={x} y={y} side={side} />
          <Square x={x + side + border} y={y} side={side} />
          <Square x={x + side + border} y={y + side + border} side={side} />
          <Square x={x + (side + border) * 2} y={y} side={side} />
        </>
      );
    }
    if (position === 2) {
      return (
        // position 2
        <>
          <Square x={x} y={y} side={side} />
          <Square x={x + side + border} y={y} side={side} />
          <Square x={x + side + border} y={y - side + border} side={side} />
          <Square x={x + (side + border) * 2} y={y} side={side} />
        </>
      );
    }

    if (position === 3) {
      return (
        // position 3
        <>
          <Square x={x} y={y} side={side} />
          <Square x={x} y={y + side + border} side={side} />
          <Square x={x} y={y + 2 * (side + border)} side={side} />
          <Square x={x + (side + border)} y={y + (side + border)} side={side} />
        </>
      );
    }

    if (position === 4) {
      return (
        // position 4
        <>
          <Square x={x} y={y} side={side} />
          <Square x={x} y={y + side + border} side={side} />
          <Square x={x} y={y + 2 * (side + border)} side={side} />
          <Square
            x={x + -1 * (side + border)}
            y={y + (side + border)}
            side={side}
          />
        </>
      );
    }

    
  }
}
