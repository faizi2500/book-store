import React from 'react';

const Input = () => (
  <>
    <h2>Add Book</h2>
    <form className="formStyle">
      <input type="text" placeholder="Name of Book" />
      <input type="text" placeholder="Name of Author" />
      <button type="submit" className="addBtn">Add Book</button>
    </form>
  </>
);

export default Input;
