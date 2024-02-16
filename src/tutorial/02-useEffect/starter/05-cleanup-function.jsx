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
    const someFunc = () => {
      console.log('some function');
    }
    window.addEventListener('scroll', someFunc);
    // return the cleanup function
    return () => {
      window.removeEventListener('scroll', someFunc);
    }

  },[]);
  
  return <h2>Extra Component</h2>
}

export default CleanupFunction;
