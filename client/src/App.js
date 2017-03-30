import React from 'react'
import { Link } from 'react-router-dom'

export default React.createClass({
  render() {
    return (
      <div>
        <h3>appppp</h3>
        <ul role="nav">
          <li>
            <Link to="/festivals">Festivals</Link>
          </li>
        </ul>
      </div>
    )
  }
})
