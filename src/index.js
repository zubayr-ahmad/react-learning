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
  return (
    <section className='booklist'>
      <EventExample />
      {books.map((book) => {
        return (
          <Book {...book} key={book.id} />
        )
      })}
    </section>
  );
}

const EventExample = () => {
  return (
    <section>
      <form >
        <h2>Typical Form</h2>
        <input type="text" name="product" onChange={(e)=> console.log(e.target.value)} style={{ margin: "1rem 0" }} />
      <button type="submit" >Submit</button>
      <div>
          <button onClick={() => console.log("click me")} type="button">Click me</button>
      </div>
      </form>
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  // console.log(props)
  return (
    <article className='book'>
      <img src={img} alt="book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />)

