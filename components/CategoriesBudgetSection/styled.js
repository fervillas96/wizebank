import styled from 'styled-components'

import { Card } from '@components/Styled/styled'
import { Row } from 'react-simple-flex-grid'

const FullWidthRow = styled(Row)`
  width: 100%;
`;

const BudgetCard = styled(Card)`
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 5px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  padding: 10px 5px;
`;

const TitleLabel = styled.h3`
  line-height: 24px;
  font-size: 20px;
  margin: 0;
`;

const PercentageLabel = styled.span`
  font-size: 12px;
  color: #444;
`;

const RemainingLabel = styled.p`
  line-height: 0;
  font-size: 12px;
  color: #c3c3c3;
`;

export {
  BudgetCard,
  TitleLabel,
  Container,
  FullWidthRow,
  RemainingLabel,
  DescriptionContainer,
  PercentageLabel,
}