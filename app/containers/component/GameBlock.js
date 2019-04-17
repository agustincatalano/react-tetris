import styled from 'styled-components';
import gameImage from '../../images/game-image.jpg';


const GameBlock = styled.div`
  flex: 1;
  border: 1px solid red;
  class: game-block;
  background-image: url(${gameImage});
  display: flex;
  background-size: cover;
  background-position: center;
`;
export { GameBlock };