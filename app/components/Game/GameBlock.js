import styled from 'styled-components';
import React from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { I, O, T, L, J } from '../figures';

const MyGameBlock = styled.div`
  flex: 1;
  border: 1px solid red;
  class: game-block;
  display: flex;
  background-size: cover;
  background-position: center;
`;

const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'pink'];
const size = 25;

const getNextColor = () => colors[Math.floor(Math.random() * colors.length)];

export class GameBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0 };
  }

  rotate() {
    console.log(this);
    const rotation = this.state.rotation;
    if (rotation === 3) {
      this.setState({ rotation: 0 });
    } else {
      this.setState({ rotation: rotation + 1 });
    }
    console.log('rotation', rotation);
  }

  // this is going to be executed only once when the component is added to the DOM tree
  // componentDidMount() {
  //   setInterval(() => {
  //     this.rotate();
  //   }, 1000);
  // }

  render() {
    return (
      <MyGameBlock>
        <Stage width="800" height="400">
          <Layer>
            <Text text="Try click on rect" />
            <I horizontal color={getNextColor()} size={size} />
            <I />
            <O color={getNextColor()} />
            <T position={this.state.rotation} />
            <L position={this.state.rotation} />
            <J position={this.state.rotation} />
          </Layer>
        </Stage>
        <button onClick={() => this.rotate()}>Rotate</button>
      </MyGameBlock>
    );
  }
}
