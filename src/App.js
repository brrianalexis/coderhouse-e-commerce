import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ItemPage, Home, Cart } from './pages';
import { Navbar } from './components';
import './index.css';

function App() {
  return (
    <CartProvider value={[]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories/:genre' exact component={Home} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/item/:id' exact component={ItemPage} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
