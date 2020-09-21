import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Home, ItemView, Cart, NewItemPage } from './pages';
import { Navbar } from './components/next';

function App() {
  return (
    <CartProvider value={[]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/genre/:genre' exact component={Home} />
          <Route path='/cart' exact component={Cart} />
          <Route
            path='/products/:artist/:albumTitle'
            exact
            component={NewItemPage}
          />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
