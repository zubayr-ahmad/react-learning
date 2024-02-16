import { useState, useReducer } from 'react';
import { data } from '../../../data';
const defaultState = {
  people:data,
  isLoading:false,
};

const CLEAR_LIST = 'CLEAR_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';
const RESET_LIST = 'RESET_LIST';

// inside this we will control our state
function reducer(state, action) {
  if(action.type === CLEAR_LIST){
    // we first spread out all the values from the previous state and then
    // we just change only that value which we want to change. Rest of 
    // the values will remain same.
    return {...state, people:[]}
  }
  else if(action.type === RESET_LIST){
    return {...state, people:data}
  }

  else if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }

  // to avoid returning undefined, we can return the state itself but
  // it is better through error so we can debug it easily.
  // return state

  throw new Error(`No Matching "${action.type}" - action type`);
}


const ReducerBasics = () => {
  const [state,dispatch] = useReducer(reducer, defaultState)


  const removeItem = (id) => {
    dispatch({type:REMOVE_ITEM,payload:{id}})

  };
  const clearList = () => {
    dispatch({type:CLEAR_LIST})
  }

  const resetList = () => {
    dispatch({type:RESET_LIST})
  }
// console.log(state);
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
      {state.people.length != 0 ? <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={clearList}
      >
        clear items
      </button> :
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
          onClick={resetList}>
          Reset
        </button>
      }
    </div>
  );
};

export default ReducerBasics;
