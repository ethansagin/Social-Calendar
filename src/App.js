import React, { Component } from 'react';
import FriendsContainer from './containers/FriendsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Social Calendar</h1>
        <FriendsContainer />
      </div>
    );
  }
}

export default App;
