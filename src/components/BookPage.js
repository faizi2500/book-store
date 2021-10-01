import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Input from './Input';
import Books from './Books';
import { addBook, removeBook, getAll } from '../redux/bookstore/booksRedux';

const BookPage = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (title, category) => {
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
  };

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const list = useSelector((state) => state.booksReducer);

  const deleteBook = (id) => dispatch(removeBook(id));

  return (
    <>
      <div className="App">
        <Books bookList={list} removeBookProp={deleteBook} />
        <Input addBooks={submitBookToStore} />
      </div>
    </>
  );
};

export default BookPage;
