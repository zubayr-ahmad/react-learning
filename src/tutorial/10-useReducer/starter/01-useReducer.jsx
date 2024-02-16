import { useState, useReducer } from 'react';
import { data } from '../../../data';
const defaultState = {
  people:data,
};

// inside this we will control our state
function reducer() {

}


const ReducerBasics = () => {
  const [state,dispatch] = useReducer(reducer, defaultState)


  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const clearList = () => {
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
