import React, { Component } from 'react'
import Client from './Client'

class FestivalRow extends Component {
  render() {
    let festival = this.props.festival
    console.log("festival is ",festival)
    return(
      <tr key={festival._id}>
        <td>
          <p className="ui item">{festival.name}</p>
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
