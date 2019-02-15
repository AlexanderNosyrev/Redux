import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Primary from './components/Primary.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import News from './components/News.jsx';
import Profile from './components/Profile.jsx';

class Main extends Component { // eslint-disable-line
  render() {
    return (
      <div id="content">
        <div className="visible-xs visible-sm mt-70" />
          <Switch>
            <Route exact path="/" component={Primary} />
            <Route path="/login" component={LoginContainer} />
            <Route exact path="/news" component={News} />
            <Route path="/profile" component={Profile} />
          </Switch>
      </div>
    );
  }
}

export default Main;
