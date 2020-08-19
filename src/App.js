import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Catalog } from './views';

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
      </Switch>
    </Router>
  );
}

export default App;
