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
  const handleFormInput = (e) => {
    // console.log(e);
    console.log("target",e.target);
    console.log("value",e.target.value);
    console.log("name",e.target.name);
  };
  const handleButtonClick = () => {
    alert('button clicked')
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input type="text" name="product" onChange={handleFormInput} style={{ margin: "1rem 0" }} />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
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

