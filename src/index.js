import React from 'react'
import ReactDom from 'react-dom'

// Nested components, React tools

function Greeting() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title></Title>
      <Author/>
    </article>
  );
};
const Image = () => <img src="https://m.media-amazon.com/images/I/61Wgw1NE0xL._AC_UL320_.jpg" alt="book" />;
const Title = () => <h3>Sales Activation: Create needs and fulfill demands at the point-of-purchase</h3>;
const Author = () => {
  return <h2>Baldur Gudgeirsson</h2>
}

ReactDom.render(<Greeting />, document.getElementById('root'));

