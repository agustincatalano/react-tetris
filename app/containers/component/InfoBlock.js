import styled from 'styled-components';
import infoImage from '../../images/info-image.jpg';

const InfoBlock = styled.div`
  width: 200px;
  border: 1px solid blue;
  background-image: url(${infoImage});
  background-size: cover;
`;

export { InfoBlock };
