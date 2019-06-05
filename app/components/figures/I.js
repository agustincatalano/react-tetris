import React from 'react';
import { Square } from './Square';

export class I extends React.Component {
  render() {
    const x = 20;
    const y = 20;
    const border = 1;

    const { horizontal, color, size } = this.props;

    if (horizontal) {
      return (
        <>
          <Square color={color} x={x} y={y} side={size} />
          <Square color={color} x={x + size + border} y={y} side={size} />
          <Square color={color} x={x + (size + border) * 2} y={y} side={size} />
          <Square color={color} x={x + (size + border) * 3} y={y} side={size} />
        </>
      );
    }
    return (
      <>
        <Square color={color} x={x} y={y} side={size} />
        <Square color={color} x={x} y={y + size + border} side={size} />
        <Square color={color} x={x} y={y + 2 * (size + border)} side={size} />
        <Square color={color} x={x} y={y + 3 * (size + border)} side={size} />
      </>
    );
  }
}
