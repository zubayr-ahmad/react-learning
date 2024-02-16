import { useCallback, useState, useMemo } from 'react';
import { data } from '../../../../data';
import List from './List';
import slowFunction from './slowFunction';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  // useMemo is used to prevent the slowFunction from being re-run on every render
  // it will save the value of slowFunction and only re-run it when the dependencies
  // change.
  const value = useMemo(()=>slowFunction(),[])
  console.log(value)

  // useCallback is used to prevent the function from being re-created on every render
  // This is useful when passing the function to a child component. Otherwise, the 
  // when count changes, it recreates this function and props removePerson will be
  // changed and the child component will re-render
  const removePerson = useCallback((id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  },[people])
  // have to pass people as a dependency because otherwise it will use the initial state
  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
