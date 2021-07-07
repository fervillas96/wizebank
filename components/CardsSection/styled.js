import styled from 'styled-components'
import { Card } from '@components/Styled/styled'

import { Row, Col } from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css"

const FullWidthRow = styled(Row)`
  width: 100%;
  padding: 15px 5px;
  display: flex;
  align-items: flex-end;
  height: 80px;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3`
  color: #69a99e;
  font-size: 24px;
  line-height: 24px;
  margin: 0;
`;

const BalanceCol = styled(Col)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const CenterCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const CardNumber = styled.p`
  margin: 0;
  line-height: 26px;
`;

const Balance = styled.h3`
  font-size: 28px;
  line-height: 18px;
  margin: 0;
  color: #69a99e;
`;

const SubTitle = styled.p`
  color: #c3c3c3;
  font-size: 12px;
  line-height: 18px;
  margin: 0;
`;

const Line = styled.hr`
  color: #c3c3c3;
  background-color: #c3c3c3;
  border-color: #F3F3F3;
  width: 100%;
`;

export {
  FullWidthRow,
  StyledCard as Card,
  Title,
  CardNumber,
  Balance,
  BalanceCol,
  CenterCol,
  SubTitle,
  Line,
}