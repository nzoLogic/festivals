import React, { Component } from 'react'
import Client from './Client'

class FestivalPage extends Component {
  state = {
    festival: null
  }
  componentDidMount() {
    Client.search(this.props.match.url, (response) => this.setState({festival: response[0]}))
  }
  render() {
    let festival = this.state.festival
    const loading = <p>...loading...</p>
    return(
      <div className="ui container">
        { festival ? festival.name : loading }
      </div>
    )
  }
}

export default FestivalPage
