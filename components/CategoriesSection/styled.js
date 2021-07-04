import styled, { css } from 'styled-components'

const Card = styled.div`
    background-color: #FFF;
    border-radius: 2px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    padding: 15px;
    width: 100%;
`;

const ChartContainer = styled.div`
  width: 60%;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TotalLabel = styled.h3`
  font-size: 18px;
  flex-grow: 1;
  color: #3c3c3c;
`;

const Spent = styled.span`
  font-size: 26px;
`;

const LabelsContainer = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 4px;
`;

const CategorieLabel = styled.p`
  font-size: 16px;
  flex-grow: 1;
  
`;

const CategorieAmount = styled.p`
  font-size: 18px;
  margin-left: 2px;
  color: #3c3c3c;
`;

const Category = styled.div`
  color: ${({iconColor}) => iconColor ? iconColor : 'green' };
  display: flex;
  align-items: center;

`;

export {
  Card,
  ChartContainer,
  LabelsContainer,
  CategorieLabel,
  Category,
  CategorieAmount,
  TotalLabel,
  Spent,
  TotalContainer,
}