import React from 'react'
import Home from './Home'
import Festivals from './Festivals'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default React.createClass({
  render() {
    return (
      <Router>
        <div>
          <ul className="ui tabular menu">
            <li className="item"><Link to="/">Home</Link></li>
            <li className="item"><Link to="/festivals">festivals</Link></li>
          </ul>

        <Route exact path="/" component={Home} />
        <Route path="/festivals" component={Festivals} />
          <main className="ui container">
            {this.props.children}
          </main>
        </div>
      </Router>
    )
  }
})
