import * as React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// import StartView from './views/startView/StartView';
import LandingPage from './views/landingPage/LandingPage';
import Header from './components/header/Header';

class App extends React.Component {

  public render() {
    return (
      <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
