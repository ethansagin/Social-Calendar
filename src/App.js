import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import FriendsContainer from './containers/FriendsContainer'
import FriendContainer from './containers/FriendContainer'
import Navigation from './components/Navigation'
import UpcomingContainer from './containers/UpcomingContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/friends' component={FriendsContainer}/>
            <Route path='/friends/:id' component={FriendContainer}/>
            <Route path='/upcoming' component={UpcomingContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
