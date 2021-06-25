import React from 'react';
import { MobileContainer } from './styled';

const MobileAppContainer = ({children}) => {

  return (
    <MobileContainer>
      {children}
    </MobileContainer>
  )
};

export default MobileAppContainer;