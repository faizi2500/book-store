import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ book, removeBookProp }) => (
  <div key={book.id} className="parentBook">
    <div className="col-1">
      <div className="bookDetails">
        <p>{book.category}</p>
        <h2>{book.title}</h2>
        <p className="author">Author</p>
      </div>
      <div className="bookActions">
        <p className="bookCTA">Comments</p>
        <p className="separator" />
        <div className="align-btn">
          <button className="removeAction bookCTA" type="button" onClick={() => removeBookProp(book.id)}>
            Remove
          </button>
        </div>
        <p className="separator" />
        <p className="bookCTA">Edit</p>
      </div>
    </div>
    <div className="progress">
      <div className="oval-2" />
      <p className="text-progress">
        74%
        <br />
        Completed
      </p>
    </div>

    <div className="updateProgress">
      <div className="text-progress">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapterNumber">Chapter 17</p>
      </div>
      <button type="submit" className="removeBtn">
        <span className="rmvBtnText">UPDATE PROGRESS</span>
      </button>
    </div>

  </div>
);

BookList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  removeBookProp: PropTypes.func.isRequired,
};

export default BookList;
