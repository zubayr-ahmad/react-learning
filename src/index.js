import React from 'react'
import ReactDom from 'react-dom/client'

// CSS
import './index.css'
//  setup vars
const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './Images/book1.jpg',
};
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}


const Book = (props) => {
  // children is a special prop
  const { img, title, author, children } = props
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />)

