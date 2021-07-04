import styled from 'styled-components'

const IconContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconBackground = styled.div`
  border-radius: 5px;
  padding: 5px;
  background-color: rgba(209, 207, 207, 0.44);
`;

const DescriptionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Label = styled.p`
  font-size: 18px;
  color: #94959D;
  line-height: 0;
`;

const Number = styled.h3`
line-height: 0;
`;

export {
  IconContainer,
  IconBackground,
  Label,
  Number,
  DescriptionContainer,
}