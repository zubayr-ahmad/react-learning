import React from 'react'
import ReactDom from 'react-dom/client'

// CSS
import './index.css'
//  setup vars
const firstBook = {
  img: "./images/book1.jpg",
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
const Book = ({ img, title, author }) => {
  // const {img, title, author} = props
  return (
    <article className='book'>
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p></p>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Greeting />)

