import React from 'react';

import { MainContainer } from './styled';

const BodyContainer = ({ children }) => {

  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default BodyContainer;