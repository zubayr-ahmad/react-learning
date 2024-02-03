import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount("pants");
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button onClick={handleClick} className="btn">Counter</button>
    </div>

  );
};

export default UseStateBasics;
