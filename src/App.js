import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Categories from './components/Categories';
import Navigation from './components/Navigation';
import BookPage from './components/BookPage';

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route exact path="/categories">
        <Categories />
      </Route>
      <Route exact path="/">
        <div className="App">
          <BookPage />
        </div>
      </Route>
    </Switch>
  </>
);

export default App;
