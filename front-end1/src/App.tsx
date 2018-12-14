import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Switch, Route, BrowserRouter } from 'react-router-dom'
// import StartView from './views/startView/StartView';
import LandingPage from './views/landingPage/LandingPage';
import Header from './components/header/Header';
import AllAdsView from './views/allAdsView/AllAdsView';
import MyAdsView from './views/myAdsView/MyAdsView';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
        <>
          <Switch>
            <Route exact path='/' component={LandingPage} />
          </Switch>
          <Switch>
            <Route exact path='/AllAds' component={AllAdsView} />
          </Switch>
          <Switch>
            <Route exact path='/MyAds' component={MyAdsView} />
        </Switch>
        </>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
