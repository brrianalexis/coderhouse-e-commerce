import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Cart, NewItemPage, NewHome } from './pages';
import { Navbar } from './components/next';
import './index.css';

function App() {
  return (
    <CartProvider value={[]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={NewHome} />
          <Route path='/genre/:genre' exact component={NewHome} />
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
