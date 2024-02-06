import { useState, useEffect } from "react";
const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  console.log(value);
  return <div>
    <button className="btn" onClick={()=> setValue(!value)}>toggle element</button>
    {value && <ExtraComp />}

    </div>;
};

const ExtraComp = () =>{
  useEffect(()=>{
    console.log('Extra component mounted');
    const intID = setInterval(() => {
      console.log('Hello world');
    }, 1000);
    // return the cleanup function
    return () => {
      console.log('Extra component unmounted');
      clearInterval(intID);
    }

  },[]);
  
  return <h2>Extra Component</h2>
}

export default CleanupFunction;
