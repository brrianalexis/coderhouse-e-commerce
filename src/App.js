import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          exact
          render={props => (
            <Home {...props} greeting='Hi there, fellow coder!' />
          )} /*  component={Home} */
        />
      </Switch>
    </Router>
  );
}

export default App;
