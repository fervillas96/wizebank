import styled from 'styled-components'

import { Card } from '@components/Styled/styled'

const InvesmentCard = styled(Card)`
  justify-content: space-between;
`;


const RoundedIconContainer = styled.div`
  background-color: #FFF;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
`;


const Title = styled.h3`
  line-height: 22px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 0;
`;

export {
  InvesmentCard,
  RoundedIconContainer,
  DescriptionContainer, 
  Title, 
  Description,
}