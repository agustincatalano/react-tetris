import styled from 'styled-components';
import infoImage from '../../images/info-image.jpg';
import { StartGame } from './StartGame';

export const MyInfoBlock = styled.div`
  width: 200px;
  border: 1px solid blue;
  background-image: url(${infoImage});
  background-size: cover;
`;
// use StartGame in here somehow

export class InfoBlock extends React.Component {
  render() {
    return MyInfoBlock;
  }
}
