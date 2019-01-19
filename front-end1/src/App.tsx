import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Switch, Route, BrowserRouter } from 'react-router-dom'
// import StartView from './views/startView/StartView';
import LandingPage from './views/landingPage/LandingPage';
import AllAdsView from './views/allAdsView/AllAdsView';
import MyAdsView from './views/myAdsView/MyAdsView';
import NotFound from './views/notFoundView/NotFoundView';
import AddAdsView from './views/addAdsView/AddAdsView';
import AdPreview from './views/advertisementPreviewView/AdvertisementPreviewView';

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
			<Route exact path='/add-ads' component={AddAdsView} />
            <Route exact path='/ad-preview' component={AdPreview}/>
            <Route component={NotFound} />
          </Switch>
        </>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
