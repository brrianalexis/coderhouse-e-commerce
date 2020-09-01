import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Home, ItemView, Cart } from './views';
import { NavBar } from './components';

function App() {
  return (
    <CartProvider value={[]}>
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
    </CartProvider>
  );
}

export default App;
