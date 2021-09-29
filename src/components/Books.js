import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ bookList, removeBookProp }) => (
  <section className="bookSection">
    {bookList.map((book) => {
      const name = book.title;
      return (
        <div key={book.id} className="bookRow">
          <div className="bookDisplay">
            <h3>{name}</h3>
            <p>
              {book.author}
            </p>
          </div>
          <button type="submit" className="removeBtn" onClick={() => removeBookProp(book.id)}>Remove</button>
        </div>
      );
    })}
  </section>
);

Books.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookList: PropTypes.array.isRequired,
  removeBookProp: PropTypes.func.isRequired,
};

export default Books;
