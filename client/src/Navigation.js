import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Festival from './Festival';
import Welcome from './Welcome';

class Navigation extends Component {
  render () {
    return (
      <Router>
      <div>
        <div className="ui tabular menu">
            <Link to="/" className="item">Home</Link>
            <Link to="/festivals" className="item">Festivals</Link>
          </div>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route path="/festivals" component={Festival}/>

        </div>
        </div>
        </Router>
    );
  }
}

export default Navigation;
