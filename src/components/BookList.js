import React from 'react';
import PropTypes from 'prop-types';

// const BookList = ({ book, removeBookProp }) => (
//   <div key={book.id} className="bookRow">
//     <div className="bookDisplay">
//       <h3>{book.title}</h3>
//       <p>
//         {book.category}
//       </p>
//     </div>
//     <button type="submit" className="removeBtn" onClick={() => removeBookProp(book.id)}>
//       <spam className="rmvBtnText">Remove</spam>
//     </button>
//   </div>
// );

const BookList = ({ book, removeBookProp }) => (
  <div key={book.id} className="parentBook">
    <div className="col-1">
      <div className="bookDetails">
        <p>{book.category}</p>
        <h2>{book.title}</h2>
        <p>Author</p>
      </div>
      <div className="bookActions">
        <p>Comments</p>
        <p>|</p>
        <button className="removeAction" type="button" onClick={() => removeBookProp(book.id)}>
          Remove
        </button>
        <p>|</p>
        <p>Edit</p>
      </div>
    </div>
    <div className="progress">
      <div className="oval-2" />
      <p>
        74%
        <br />
        Completed
      </p>
    </div>

    <div className="updateProgress">
      <p>CURRENT CHAPTER</p>
      <p>Chapter 17</p>
      <button type="submit" className="removeBtn">
        <span className="rmvBtnText">Remove</span>
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
