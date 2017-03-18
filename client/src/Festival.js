import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Client from './Client';

class Festival extends Component {
  state = {
    festivals: [],
    showRemoveIcon: false,
    searchValue: ''
  }

  handleSearch = (e) => {
    console.log("handle search fired")
    Client.search()
          .then((festivals) => {
            console.log('festivals is ', festivals)
            this.setState({
              festivals: festivals
            });
    });
  }

  render() {
    const {festivals } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Festival Season!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p> </p>
        <button onClick={this.handleSearch}>Festivals</button>
       </div>
    );
  }
}

export default Festival;
