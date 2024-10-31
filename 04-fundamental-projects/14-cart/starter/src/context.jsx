import { createContext, useContext, useReducer, useEffect } from 'react'
import { defaultState, reducer } from './reducer'

import {
  CLEAR_LIST,
  RESET_LIST,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './action'
import { getTotal } from './utils'
const AppContext = createContext()

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const { totalAmount, totalCost } = getTotal(state.cart)

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } })
  }

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } })
  }

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearList,
        resetList,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default Context

export const useGlobalAppContext = () => {
  return useContext(AppContext)
}
