import './index.css';
import React from 'react';
import AuthorCards from '../AuthorCards';
// import fs from 'fs';

const AllCards = () => {
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = React.useState([]);
  const [Authors, setAuthors] = React.useState([]);

  React.useEffect(() => {
    fetch('books.json')
      .then(response => response.json())
      .then(data => {
        const authors = Object.keys(data);
        setAuthors(authors);
        setBooks(data);
      })
      .catch();
  }, []);

  return <div className="all-cards">
    {Authors.map(Author => {
        return <AuthorCards Author={Author} books={books[Author]} />
    })}

  </div>;
};

export default AllCards;
