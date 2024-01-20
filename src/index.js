import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

function Greeting() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title></Title>
      <Author/>
    </article>
  );
};
const Image = () => <img src="https://m.media-amazon.com/images/I/61Wgw1NE0xL._AC_UL320_.jpg" alt="book" />;
const Title = () => <h1>Sales Activation: Create needs and fulfill demands at the point-of-purchase</h1>;
const Author = () => {
  return <h4 style={{color:"#617d98",fontSize:"0.75rem",marginTop:"0.25rem"}}>Baldur Gudgeirsson</h4>
}

ReactDom.render(<Greeting />, document.getElementById('root'));

