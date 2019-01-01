import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Switch, Route, BrowserRouter } from 'react-router-dom'
// import StartView from './views/startView/StartView';
import LandingPage from './views/landingPage/LandingPage';
import AllAdsView from './views/allAdsView/AllAdsView';
import MyAdsView from './views/myAdsView/MyAdsView';
import NotFound from './views/notFoundView/NotFoundView';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/all-ads' component={AllAdsView} />
            <Route exact path='/my-ads' component={MyAdsView} />
            <Route component={NotFound} />
          </Switch>
        </>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
