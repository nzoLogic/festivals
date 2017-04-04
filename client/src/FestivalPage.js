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
    let festivalName = this.props.match.params.name
    let festival = this.state.festival
    let festivalLinks = {
      "Coachella": "https://www.coachella.com/",
      "EDC Las Vegas": "http://lasvegas.electricdaisycarnival.com/",
      "Electric Forrest": "https://www.electricforestfestival.com/"
    }
    let explore = festivalLinks[festivalName]
    const loading = <div className="ui active inverted dimmer">
    <div className="ui text loader">Loading</div>
  </div>
    return(
      <div className="ui grid container">
        { festival ?
          <div className="12 wide column">

            <img className="Image-Header" src={festival.image} alt="magical experience"></img>
            <a href={explore} className="fluid ui teal button massive">EXPLORE</a>
          </div>

        : loading }
      </div>
    )
  }
}

export default FestivalPage
