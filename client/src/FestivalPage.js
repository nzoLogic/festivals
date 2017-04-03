import React, { Component } from 'react'
import Client from './Client'

class FestivalPage extends Component {
  state = {
    festival: null
  }
  render() {
    let festival = this.state
    const loading = <p>...loading...</p>
    return(
      <div className="ui container">
        { festival ? festival.name : loading }
      </div>
    )
  }
}

export default FestivalPage
