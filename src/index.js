import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

function Greeting() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}
const author = 'Baldur Gudgeirsson'
const Book = () => {
  const title = "Sales Activation: Create needs and fulfill demands at the point-of-purchase"
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/I/61Wgw1NE0xL._AC_UL320_.jpg" alt="book" />
      {/* the JSX we write should always return something. It cannot be a statement like: `let x = 6` this will give error.*/}
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{6 + 6}</p>
    </article>
  );
};


ReactDom.render(<Greeting />, document.getElementById('root'));

