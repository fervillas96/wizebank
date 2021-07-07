import styled from 'styled-components'
import { Row, Col } from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css";

const FullWidthRow = styled(Row)`
  width: 100%;
`;

const IconCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85px;
`;

const GreetingsMessage = styled.p`
  color: #c3c3c3;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`;

const UserName = styled.h3`
  color: #69a99e;
  font-size: 30px;
  line-height: 22px;
  margin: 0;
`;

export {
  FullWidthRow,
  GreetingsMessage,
  UserName,
  IconCol
}