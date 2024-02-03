import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    let newPeople = people.filter((person)=> person.id !== id);
    setPeople(newPeople);
  }
  return (

    <div >
      {people.map((per)=>{
        return (
        <div key={per.id} className='item'>
          <h2>{per.name}</h2>
          <button className='btn' onClick={()=>removePerson(per.id)}>Remove</button>
        </div>)
      })}
      <button className='btn' onClick={()=>setPeople([])}>Clear Items</button>
    </div>
  );
};

export default UseStateArray;
