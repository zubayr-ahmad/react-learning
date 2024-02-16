import { useState, useReducer } from 'react';
import { data } from '../../../data';
const defaultState = {
  people:data,
  isLoading:false,
};

// inside this we will control our state
function reducer(state, action) {
  if(action.type === "CLEAR_LIST"){
    // we first spread out all the values from the previous state and then
    // we just change only that value which we want to change. Rest of 
    // the values will remain same.
    return {...state, people:[]}
  }

}


const ReducerBasics = () => {
  const [state,dispatch] = useReducer(reducer, defaultState)


  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const clearList = () => {
    dispatch({type:'CLEAR_LIST'})
    // setPeople([]);
  }

  const resetList = () => {
    // setPeople(data);
  }
console.log(state);
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
