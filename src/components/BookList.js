import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ book, removeBookProp }) => (
  <div key={book.id} className="bookRow">
    <div className="bookDisplay">
      <h3>{book.title}</h3>
      <p>
        {book.author}
      </p>
    </div>
    <button type="submit" className="removeBtn" onClick={() => removeBookProp(book.id)}>Remove</button>
  </div>
);

BookList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  removeBookProp: PropTypes.func.isRequired,
};

export default BookList;
