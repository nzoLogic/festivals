import React, { Component } from 'react'
import Client from './Client'

class FestivalRow extends Component {
  render() {
    let festival = this.props.festival
    console.log("festival is ",festival)
    return(
      <p>{festival.name}</p>
    )
  }
}

export default FestivalRow
