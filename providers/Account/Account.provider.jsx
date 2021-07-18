import React, { useReducer, useContext } from 'react'

import { profile } from '../../mocks/bank-profile'
import { accountReducer } from '../../state/reducers/account'

const AccountContext = React.createContext(null)

function useAccountProvider() {
  const context = useContext(AccountContext)
  if (!context) {
    throw new Error(`Can't use "useAccountProvider" without an AccountProvider!`)
  }
  return context
}

function AccountProvider({ children }) {
  const [state, dispatch] = useReducer(accountReducer, profile);

  const addCategory = (newCategory) => {
    dispatch({ type: 'ADD_CATEGORY', payload: newCategory });
  };

  const removeCategory = (category) => {
    dispatch({ type: 'REMOVE_CATEGORY', payload: category });
  };

  return (
    <AccountContext.Provider
      value={{ addCategory, removeCategory, state, dispatch }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export { useAccountProvider }
export default AccountProvider
