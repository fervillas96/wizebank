import React from 'react';
import { MobileContainer } from './styled';
import { useDarkModeProvider } from '@providers/DarkMode/DarkMode.provider'

const MobileAppContainer = ({ children }) => {
  const { darkMode } = useDarkModeProvider()

  return (
    <MobileContainer useDarkMode={darkMode}>
      {children}
    </MobileContainer>
  )
};

export default MobileAppContainer;