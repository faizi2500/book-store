import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

const Books = ({ bookList, removeBookProp }) => (
  <section className="bookSection">
    {bookList.map((book) => (
      <BookList key={book.id} book={book} removeBookProp={removeBookProp} />
    ))}
  </section>
);

Books.propTypes = {
  bookList: PropTypes.node.isRequired,
  removeBookProp: PropTypes.func.isRequired,
};

export default Books;
