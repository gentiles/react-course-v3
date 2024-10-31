import React, { useReducer } from 'react';
import { data, people } from '../../../data';
import {CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './action'
import reducer from './reducer';


const defaultState = {
  people: data,
  isLoading: false
}


const ReducerBasics = () => {
  // const [people, setPeople] = React.useState(data);

 const [state, dispatch] = useReducer(reducer, defaultState, )

  const removeItem = (id) => {
    dispatch({type:REMOVE_ITEM, payload:{id}})
  };
  const handleClear = ()=>{
    // setPeople([])
    dispatch({type:CLEAR_LIST})
  }

  const handleReset = ()=>{
    // setPeople(data)
    dispatch({type: RESET_LIST})
  }
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {!state.people.length < 1 ?<button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={handleClear}
      >
        clear items
      </button>: <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={handleReset}
      >
        Reset
      </button> }
    </div>
  );
};

export default ReducerBasics;
