import React from 'react';
import { Square } from './Square';

export class T extends React.Component {
  render() {
    const side = 10;
    const x = 10;
    const y = 120;
    const border = 1;
    const { position } = this.props;

    console.log('position in T = ', position, this.props);

    if (position === 0) {
      return (
        <>
          <Square x={x} y={y + side + border} side={side} />
          <Square x={x + side + border} y={y + side + border} side={side} />
          <Square
            x={x + (side + border) * 2}
            y={y + side + border}
            side={side}
          />
          <Square x={x + side + border} y={y} side={side} />
        </>
      );
    }
    if (position === 1) {
      return (
        <>
          <Square x={x + side} y={y} side={side} />
          <Square x={x + side} y={y + side + border} side={side} />
          <Square x={x + side} y={y + 2 * (side + border)} side={side} />
          <Square x={x - border} y={y + side + border} side={side} />
        </>
      );
    }

    if (position === 2) {
      return (
        <>
          <Square x={x} y={y} side={side} />
          <Square x={x + side + border} y={y} side={side} />
          <Square x={x + side + border} y={y + side + border} side={side} />
          <Square x={x + (side + border) * 2} y={y} side={side} />
        </>
      );
    }

    if (position === 3) {
      return (
        <>
          <Square x={x + side} y={y} side={side} />
          <Square x={x + side} y={y + side + border} side={side} />
          <Square x={x + side} y={y + 2 * (side + border)} side={side} />
          <Square x={x * 3 + border} y={y + side + border} side={side} />
        </>
      );
    }
    return null;
  }
}
