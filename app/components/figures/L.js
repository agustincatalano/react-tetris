import React from 'react';
import { Square } from './Square';

export class L extends React.Component {
  render() {
    const side = 10;
    const x = 200;
    const y = 30;
    const border = 1;
    const { position } = this.props;

    if (position === 1) {
      return (
        <>
          <Square x={x} y={y} side={side} />
          <Square x={x} y={y + side + border} side={side} />
          <Square x={x} y={y + 2 * (side + border)} side={side} />
          <Square
            x={x + side + border}
            y={y + 2 * (side + border)}
            side={side}
          />
        </>
      );
    }
    if (position === 2) {
      return (
        <>
          <Square x={x + side + border} y={y} side={side} />
          <Square x={x + side + border} y={y + side + border} side={side} />
          <Square
            x={x + side + border}
            y={y + 2 * (side + border)}
            side={side}
          />
          <Square x={x} y={y + 2 * (side + border)} side={side} />
        </>
      );
    }
    if (position === 3) {
      return (
        <>
          <Square x={x + 2 * side + border} y={y} side={side} />
          <Square x={x + side + border} y={y} side={side} />
          <Square x={x + side + border} y={y + side + border} side={side} />
          <Square
            x={x + side + border}
            y={y + 2 * (side + border)}
            side={side}
          />
        </>
      );
    }

    if (position === 4) {
      return (
        <>
          <Square x={x + 2 * side + border} y={y} side={side} />
          <Square x={x + side + border} y={y} side={side} />
          <Square x={x + 2 * side + border} y={y + side + border} side={side} />
          <Square
            x={x + 2 * side + border}
            y={y + 2 * (side + border)}
            side={side}
          />
        </>
      );
    }
  }
}
