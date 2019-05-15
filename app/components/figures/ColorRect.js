import React from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';

export class ColoredRect extends React.Component {
  state = {
    color: 'blue',
  };

  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor(),
    });
  };

  render() {
    return (
      <Rect
        x={40}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}
