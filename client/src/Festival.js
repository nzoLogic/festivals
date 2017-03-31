import React, { Component } from 'react'
import Client from './Client'

class Festival extends Component {
  constructor(props) {
    super(props)
    this.state = {
      festival: null
    }
  }
  getFestival = Client.search(this.props.match.url, (response) => this.setState({festival: response[0]}))
  render() {
    const festival = this.state.festival
    return(
      <div>
        <h3>Festival</h3>
        {festival.date}
      </div>
    )
  }
}

export default Festival
