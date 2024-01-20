import React from 'react'
import ReactDom from 'react-dom'

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element <img/>
// formatting -> better to use parenthesis in return

function Greeting() {
  return (
    <>
      <div className='container'>
        <h1 onClick={()=>{}}>This is my first component</h1>
      </div>
    </>
  );
}


ReactDom.render(<Greeting />, document.getElementById('root'));

