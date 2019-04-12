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

const GameBlock = styled.div`
  flex: 1;
  border: 1px solid red;
`;

const InfoBlock = styled.div`
  width: 200px;
  border: 1px solid blue;
`;

const MainPage = styled.div`
  display: flex;
  border: 1px solid green;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <MainPage>
        <GameBlock>this is the game container1111</GameBlock>
        <InfoBlock>this is the info container2222</InfoBlock>
      </MainPage>
    );
  }
}
