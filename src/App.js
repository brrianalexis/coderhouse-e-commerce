import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, ItemView, Cart } from './views';
import { NavBar } from './components';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
        <Route
          path='/products/:artist/:albumTitle'
          exact
          component={ItemView}
        />
      </Switch>
    </Router>
  );
}

export default App;
