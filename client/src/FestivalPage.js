import React, { Component } from 'react'
import Client from './Client'
import '../styles/FestivalPage.css'
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
      <div className="ui grid container">
        { festival ?
          <div className="12 wide column">

            <img className="Image-Header" src={festival.image} ></img>
          </div>

        : loading }
      </div>
    )
  }
}

export default FestivalPage
