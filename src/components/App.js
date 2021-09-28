import './App.css';
import { Route, Switch } from 'react-router';
import Books from './Books';
import Categories from './Categories';
import Navigation from './Navigation';
import Input from './Input';

function App() {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      completed: '67%',
    },
    {
      id: 2,
      title: 'Book 2',
      completed: '77%',
    },
    {
      id: 3,
      title: 'Book 3',
      completed: '45%',
    },
  ];
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <div className="App">
            <Books bookList={books} />
            <Input />
          </div>
        </Route>
      </Switch>
    </>
  );
}
export default App;
