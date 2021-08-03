import React from 'react';
import AvatarCharacters from '../../containers/AvatarChars';
import AvatarChar from '../../containers/AvatarChar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={(routerProps) => <AvatarCharacters {...routerProps} />}
          />
          <Route path="/:id" exact={true} component={AvatarChar} />
        </Switch>
      </Router>
    </div>
  );
}
