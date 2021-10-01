import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const [input, setInput] = useState({
    title: '',
    category: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (input.title.trim() && input.category.trim()) {
      props.addBooks(input.title, input.category);
      setInput({
        title: '',
        category: '',
      });
    }
  };

  const inputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <hr className="line" />
      <h2 className="form-heading">Add New Book</h2>
      <form className="formStyle">
        <input type="text" placeholder="Book Title" onChange={inputChange} value={input.title} name="title" className="book-entry" />
        <input type="text" placeholder="Category" onChange={inputChange} value={input.category} name="category" className="book-category" />
        {/* <div className="addBtn"> */}
        <button type="submit" className="addBtn" onClick={submitForm}>
          <span className="btnText">
            ADD BOOK
          </span>
        </button>
        {/* </div> */}
      </form>
    </>
  );
};

Input.propTypes = {
  addBooks: PropTypes.func.isRequired,
};

export default Input;
