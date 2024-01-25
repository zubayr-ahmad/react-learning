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
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  }
]

const names = ['jhon','peter','susan']
const newNames = names.map((name)=>{
  return <h1>{name}</h1>;
})
console.log(newNames);

function BookList() {
  return (
    <section className='booklist'>{newNames}</section>
  );
}


const Book = (props) => {
  // children is a special prop
  const { img, title, author } = props
  console.log(props)
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

