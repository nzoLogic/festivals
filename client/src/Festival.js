import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

class FestivalRow extends Component {
  render() {
    let festival = this.props.festival
    console.log("festival is ",festival)
    return(
      <tr key={festival._id}>
        <td>
          <Link to={`/festivals/${festival.name}`} className="ui item">{festival.name}</Link>
        </td>
        <td>
          <p className="ui item">{festival.location}</p>
        </td>
        <td>
          <p className="ui item">{festival.date}</p>
        </td>

      </tr>
    )
  }
}

export default FestivalRow
