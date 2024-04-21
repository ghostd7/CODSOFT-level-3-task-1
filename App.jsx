import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
