import React from 'react'
import ReactDom from 'react-dom/client'

import './index.css'
import {books} from './books'
// import banana from './books';  // using default export
import Book from './Book';   // using default export

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book {...book} key={book.id}/>
        )
      })}
    </section>
  );
}



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />)

