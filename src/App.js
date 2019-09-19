import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import FriendsContainer from './containers/FriendsContainer'
import Friend from './components/Friend'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/friends' component={FriendsContainer}/>
            <Route exact path='/friends/:id' component={Friend}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
