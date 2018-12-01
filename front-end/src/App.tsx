import * as React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import StartView from './views/startView/StartView';

class App extends React.Component {

  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={StartView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
