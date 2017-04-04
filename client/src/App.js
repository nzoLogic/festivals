import React from 'react'
import Home from './Home'
import Festivals from './Festivals'
import FestivalPage from './FestivalPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default React.createClass({
  render() {
    return (
      <Router>
        <div>
          <ul className="ui tabular menu">
            <li className="item"><Link to="/">Home</Link></li>
            <li className="item"><Link to="/festivals">Festivals</Link></li>
          </ul>

        <Route exact path="/" component={Home} />
        <Route exact path="/festivals" component={Festivals} />
        <Route path="/festivals/:name" component={FestivalPage} />
        </div>
      </Router>
    )
  }
})
