import React from 'react'
import ReactDom from 'react-dom'

// Nested components, React tools

function Greeting() {
  return (
    <div>
      <Person/>
      <Message/>
    </div>
  );
}

const Person = () => <h2>Muhammad Zubair</h2>;
const Message = () => { 
  return <p>I am learning nested components</p>; 
}  // Both are same just diff ways of returning.



ReactDom.render(<Greeting />, document.getElementById('root'));

