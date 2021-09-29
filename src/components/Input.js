import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (input.title.trim() && input.author.trim()) {
      props.addBooks(input.title, input.author);
      setInput({
        title: '',
        author: '',
      });
      console.log(input.title, input.author);
    }
  };

  const inputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Add Book</h2>
      <form className="formStyle">
        <input type="text" placeholder="Name of Book" onChange={inputChange} value={input.title} name="title" />
        <input type="text" placeholder="Name of Author" onChange={inputChange} value={input.author} name="author" />
        <button type="submit" className="addBtn" onClick={submitForm}>Add Book</button>
      </form>
    </>
  );
};

Input.propTypes = {
  addBooks: PropTypes.func.isRequired,
};

export default Input;
