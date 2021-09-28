import './App.css';
import { Route, Switch } from 'react-router';
import Books from './Books';
import Categories from './Categories';
import Navigation from './Navigation';
import Input from './Input';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <div className="App">
            <Books />
            <Input />
          </div>
        </Route>
      </Switch>
    </>
  );
}
export default App;
