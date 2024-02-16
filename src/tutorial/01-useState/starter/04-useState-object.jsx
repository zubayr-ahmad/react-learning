import { useState } from 'react';

const UseStateObject = () => {
  const object1 = { name: 'peter', age: 24, message: 'Read Books'};
  const [person, setPerson] = useState(object1);
  const changePerson = () => {
    const newPerson = {name: 'john', age: 28, message: 'Scream at The Computer'};
    // setPerson(newPerson);
    setPerson("Hello World");
    setPerson({ ...person, name: "jhon" })

  }
  const {name, age, message} = person;
  return (
    <div>
      <h2>useState object example</h2>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys to: {message}</h3>
      <button className='btn' onClick={changePerson}>Show Jhon</button>
    </div>
  )
  
};

export default UseStateObject;
