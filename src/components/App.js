import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/bookstore/booksRedux';
import Books from './Books';
import Categories from './Categories';
import Navigation from './Navigation';
import Input from './Input';

const App = () => {
  // const books = [
  //   {
  //     id: 1,
  //     title: 'Book 1',
  //     completed: '67%',
  //   },
  //   {
  //     id: 2,
  //     title: 'Book 2',
  //     completed: '77%',
  //   },
  //   {
  //     id: 3,
  //     title: 'Book 3',
  //     completed: '45%',
  //   },
  // ];
  // const list =[]
  const list = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <div className="App">
            <Books bookList={list} />
            <Input addBooks={submitBookToStore} />
          </div>
        </Route>
      </Switch>
    </>
  );
};
export default App;
