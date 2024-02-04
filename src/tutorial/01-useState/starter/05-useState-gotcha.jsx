import { useState } from "react";

const UseStateGotcha = () => {
  const [value,setValue] = useState(0);
  const increaseValue = () => {
    // Approach 1: function to update the state
    // setValue((prevValue) => {
    //   const newVal = prevValue + 1;
    //   console.log(newVal);
    //   return newVal;
    // });

    // Approach 2: how to update inside a setTimeout
    setTimeout(() => {
      setValue((prevValue)=>{
        return prevValue + 1;
      })
    }, 10);
  }
  return <div>
    <h1>{value}</h1>
    <button className="btn" onClick={increaseValue}>Increase</button>
  
  </div>;
};

export default UseStateGotcha;
