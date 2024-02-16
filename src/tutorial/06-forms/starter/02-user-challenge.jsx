import {data} from '../../../data';
import {useEffect, useState} from 'react';
const UserChallenge = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState('');
  
  const removeUser = (id) => {
    console.log('remove user',id);
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  const addUser = (e) => {
    e.preventDefault();
    if (!name) return;
    const person = { id: Date.now() , name };
    const newPeople = [...people,person];
    setPeople(newPeople);
    
    
  }
  
  return (
    <div>
      <form className='form' onSubmit={addUser}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label' >
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h2>Users</h2>
      {people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={()=>removeUser(id)}>remove</button>
          </div>
        );
      })}

    </div>
  );
};
export default UserChallenge;
