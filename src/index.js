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
  function getBook(id){
    const book_found = books.find((book) => book.id === id)
    console.log(book_found)
  };

  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book {...book} key={book.id} getBook={getBook}/>
        )
      })}
    </section>
  );
}


const Book = (props) => {
  const { img, title, author, getBook, id } = props
  // console.log(props)
  // getBook(2);
  function getSingleBook(){
    getBook(id)
  };
  return (
    <article className='book'>
      <img src={img} alt="book" />
      <h1>{title}</h1>
      {/* Passing the reference will solve the bug */}
      {/* <button onClick={getSingleBook}>Find Book</button> */}
      <button onClick={()=>getBook(id)}>Find Book</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />)

