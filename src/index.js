import React from 'react'
import ReactDom from 'react-dom/client'

// CSS
import './index.css'
//  setup vars
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './Images/book1.jpg',
    id: 1
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2
  }
]


function BookList() {
  const someValue = "shakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book {...book} key={book.id} displayValue={displayValue}/>
        )
      })}
    </section>
  );
}


const Book = (props) => {
  const { img, title, author, displayValue } = props
  // console.log(props)
  
  return (
    <article className='book'>
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <button onClick={displayValue}>Click Me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />)

