import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
//  setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/61Wgw1NE0xL._AC_UL320_.jpg",
  title: "Sales Activation: Create needs and fulfill demands at the point-of-purchase",
  author: 'Baldur Gudgeirsson'
}
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL600_SR600,400_.jpg",
  title: "Iron Flame (The Empyrean, 2)",
  author: 'Rebecca Yarros'
}


function Greeting() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img}  title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}
const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt="book" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <p></p>
    </article>
  );
};


ReactDom.render(<Greeting />, document.getElementById('root'));

