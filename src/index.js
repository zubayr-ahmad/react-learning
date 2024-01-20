import React from 'react'
import ReactDom from 'react-dom'

// Capitalising the function names tell react that this is a component
function Greeting(){
  return (<div>
    <h1>This is my first component</h1>
  </div>)
}

// const Greeting = () => {
//   return React.createElement('div', {},React.createElement('h1',{},"this is the first component again..."))
// }
ReactDom.render(<Greeting/>,document.getElementById('root'));

