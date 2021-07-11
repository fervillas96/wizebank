import styled from 'styled-components'

import { Row, Col } from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css"

const FullWidthRow = styled(Row)`
  width: 100%;
  padding: 8px 5px;
  display: flex;
  height: 70px;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
`;

const CenterCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: ${({left}) => left ? 'flex-start' : 'center'};
  height: 52px;
  flex-direction: ${({column}) => column ? 'column' : 'row'};
`;

const Name = styled.h3`
  color: ${({color}) => color ? color : '#69a99e'};
`;

const Money = styled.h3`
  font-size: 24px;
  line-height: 18px;
  margin: 0;
  color: ${({color}) => color ? color : '#69a99e'};
`;

const Legend = styled.p`
  color: #c3c3c3;
  font-size: 10px;
  line-height: 18px;
  margin: 0;
`;

export {
  FullWidthRow,
  CenterCol,
  Name,
  Money,
  Legend,
}