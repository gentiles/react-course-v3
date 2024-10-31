
import { data, people } from '../../../data'
import {CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './action'


  
  const reducer =(state, action)=>{
    if(action.type == CLEAR_LIST){
      return {...state, people: []}
    }
    
    if(action.type == RESET_LIST){
      return {...state, people:data}
    }
    if(action.type == REMOVE_ITEM){
      const newPeople = state.people.filter((user) => user.id !== action.payload.id)
      
      return{...state, people: newPeople}
       
    }
    return state
    throw new Error(`no matching ${action.type} for this name` )
    
  }

  export default reducer
  