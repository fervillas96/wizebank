import React, { useState, useContext } from 'react'

const ColorContext = React.createContext(null)

function useColorProvider() {
  const context = useContext(ColorContext)
  if (!context) {
    throw new Error(`Can't use "useColorProvider" without an ColorProvider!`)
  }
  return context
}

function ColorProvider({ children }) {
  const [color, setColor] = useState('ligth')

  const changeTheme = (newTheme) => {
    setColor(newTheme)
  }

  return (
    <ColorContext.Provider
      value={{ color, changeTheme }}
    >
      {children}
    </ColorContext.Provider>
  );
}

export { useColorProvider }
export default ColorProvider
