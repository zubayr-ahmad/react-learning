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

export default Book;