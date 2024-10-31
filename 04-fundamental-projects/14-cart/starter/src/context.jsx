import { createContext, useContext, useReducer, useEffect } from 'react'
import { defaultState, reducer } from './reducer'
import getTotal from './utils.js'
import {
  CLEAR_LIST,
  RESET_LIST,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './action'
const Appcontext = createContext()

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const {totalAmount, totalCost} = getTotal(state.cart)

  console.log(state.cart)
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

  const decrease =(id)=>{
    dispatch({type: DECREASE, payload:{id}})
  }

  return (
    <Appcontext.Provider
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
    </Appcontext.Provider>
  )
}
export default Context

export const useGlobalAppContext = () => {
  return useContext(Appcontext)
}
