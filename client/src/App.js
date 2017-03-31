import React from 'react'
import Home from './Home'
import Festivals from './Festivals'
import Festival from './Festival'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default React.createClass({
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/festivals">festivals</Link></li>
          </ul>
          <hr />

        <Route exact path="/" component={Home} />
        <Route path="/festivals" component={Festivals} />
        </div>
      </Router>
    )
  }
})
