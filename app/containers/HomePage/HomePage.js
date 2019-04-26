import React from 'react';
import styled from 'styled-components';
import { InfoBlock, GameBlock } from '../../components';

const MainPage = styled.div`
  display: flex;
  border: 1px solid green;
`;

export class HomePage extends React.PureComponent {
  render() {
    return (
      <MainPage className="main-page">
        <GameBlock background="app/images/tetris.jpg" className="game-Block">
          {'this is the game container1111 '}
        </GameBlock>
        <InfoBlock className="info-Block">
          {'this is the info container2222'}
          <ScoreComponent className="score-component">
            {'Score: xxx '}
          </ScoreComponent>
          <LineComponent className="line-component">Line: xx</LineComponent>
          <NextComponent className="next-component"> next: </NextComponent>
          <ArrowComponent className="arrows-component">
            {'arrows here'}
          </ArrowComponent>
          <StartComponent className="start-component">Start</StartComponent>
        </InfoBlock>
      </MainPage>
    );
  }
}
