import styled from 'styled-components'

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  padding: 20px 35px;
  top: 25%;
  margin: auto;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputColor = styled.input.attrs({
  type: 'color'
})`
  margin: 10px;
`;

const Label = styled.h3`
  font-size: 20px;
  line-height: 16px;
  margin: 0;
`;

export {
  ModalContainer,
  Form,
  Label,
  InputColor,
}