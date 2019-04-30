import React from 'react';
import styled from 'styled-components';
import { InfoBlock, GameBlock } from '../../components';

const MainPage = styled.div`
  display: flex;
  border: 1px solid green;
`;

export function HomePage() {
  return (
    <MainPage>
      <GameBlock />
      <InfoBlock />
    </MainPage>
  );
}
