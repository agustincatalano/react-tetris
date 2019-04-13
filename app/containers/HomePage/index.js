/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import tetrisImage from '../../images/tetris.jpg';

const GameBlock = styled.div`
  flex: 1;
  border: 1px solid red;
  class: game-block;
  background-image: url(${tetrisImage});
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const InfoBlock = styled.div`
  width: 200px;
  border: 1px solid blue;
`;

const MainPage = styled.div`
  display: flex;
  border: 1px solid green;
`;

const ScoreComponent = styled.li`
  border: 1px solid green;
`;

const LineComponent = styled.li`
  border: 1px solid green;
`;

const NextComponent = styled.li`
  border: 1px solid green;
`;

const ArrowComponent = styled.li`
  border: 1px solid green;
`;

const StartComponent = styled.button`
  border: 1px solid green;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <MainPage className="main-page">
        <GameBlock background="app/images/tetris.jpg" className="game-Block">
          this is the game container1111
        </GameBlock>
        <InfoBlock className="info-Block">
          this is the info container2222
          <ScoreComponent className="score-component">
            {' '}
            Score: xxx
          </ScoreComponent>
          <LineComponent className="line-component"> Line: xx</LineComponent>
          <NextComponent className="next-component"> next: </NextComponent>
          <ArrowComponent className="arrows-component">
            {' '}
            arrows here{' '}
          </ArrowComponent>
          <StartComponent className="start-component"> Start </StartComponent>
        </InfoBlock>
      </MainPage>
    );
  }
}
