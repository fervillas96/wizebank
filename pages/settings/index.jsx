import React from 'react'

import MobileAppContainer from '@components/MobileAppContainer'
import NavBar from '@components/NavBar'
import BodyContainer from '@components/BodyContainer'
import NavigationButtons from '@components/NavigationButtons'
import { SectionsContainer } from '@components/Styled/styled'
import ToggleSection from '@components/ToggleSection'
import { useDarkModeProvider } from '@providers/DarkMode/DarkMode.provider'


const Settings = () => {
  const { darkMode, changeTheme } = useDarkModeProvider()
  const changeColor = (value) => {
    changeTheme(!value)
  }

  return (
    <MobileAppContainer>
      <NavBar />
      <BodyContainer>
        <SectionsContainer>
          <ToggleSection onChange={changeColor} value={darkMode} label="Dark Mode" />
        </SectionsContainer>
      </BodyContainer>
      <NavigationButtons />
    </MobileAppContainer>

  )
}

export default Settings