import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Client from './Client'

class FestivalRow extends Component {
  render() {
    let festival = this.props.festival
    console.log("festival is ",festival)
    return(
      <Link to={`/festivals/${festival.name}`}>{festival.name}</Link>
    )
  }
}

export default FestivalRow
