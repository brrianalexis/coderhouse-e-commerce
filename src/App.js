import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { NewItemPage, NewHome, NewCart } from './pages';
import { Navbar } from './components/next';
import './index.css';

function App() {
  return (
    <CartProvider value={[]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={NewHome} />
          <Route path='/categories/:genre' exact component={NewHome} />
          <Route path='/cart' exact component={NewCart} />
          <Route path='/item/:id' exact component={NewItemPage} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
