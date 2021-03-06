import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home';

import '../../styles.css';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  );
}

export default App;
