import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Catalog, ItemView } from './views';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          exact
          render={props => (
            <Home {...props} greeting='Hi there, fellow coder!' />
          )}
        />
        <Route path='/products' exact component={Catalog} />
        <Route path='/products/:id' exact component={ItemView} />
      </Switch>
    </Router>
  );
}

export default App;
