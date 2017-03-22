import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Festival from './Festival';
import Client from './Client'

class Home extends Component {

  render () {
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Festival Season!</h2>
        </div>
        <div>
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
       </div>
       <div>
       <Festival />
       </div>
       </div>
    );
  }
}

export default Home;