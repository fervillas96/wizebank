import styled from 'styled-components'

const Card = styled.div`
    background-color: ${({backgrounColor}) => backgrounColor ? backgrounColor : '#FFF'};
    width: ${({fullWidth}) => fullWidth ? '100%' : '42%'};
    flex-direction: ${({isColumn}) => isColumn ? 'column' : 'row' };
    border-radius: 2px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

const SectionsContainer = styled.div`
  margin: 3px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

export {
  SectionsContainer,
  Card,
}