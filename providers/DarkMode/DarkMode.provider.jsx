import React, { useState, useContext } from 'react'

const DarkModeContext = React.createContext(null)

function useDarkModeProvider() {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error(`Can't use "useDarkModeProvider" without an ColorProvider!`)
  }
  return context
}

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  const changeTheme = (newTheme) => {
    setDarkMode(newTheme)
  }

  return (
    <DarkModeContext.Provider
      value={{ darkMode, changeTheme }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export { useDarkModeProvider }
export default DarkModeProvider
