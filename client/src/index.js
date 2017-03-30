import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Festivals from './Festivals'
import Festival from './Festival'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('root'))
