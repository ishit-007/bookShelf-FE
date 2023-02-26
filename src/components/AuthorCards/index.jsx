import React from 'react';

import './index.css';
import PropTypes from 'prop-types';
import Card from '../Card';

const AuthorCards = props => {
  return (
    <div className="author">
      <h1>{props.Author}</h1>
      <div className="cards">
        {props.books.map((book,idx) => {
            const color = idx % 2 === 0 ? '#fc9250' : 'white';
          return <Card name={book.Name} rating={book.rating} id={book.id} Author={book.Author} scheme={color} />;
        })}
      </div>
    </div>
  );
};

AuthorCards.propTypes = {
  Author: PropTypes.string,
  books: PropTypes.array,
};
export default AuthorCards;
