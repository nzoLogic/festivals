import React, { Component } from 'react'
import Client from './Client'
import '../styles/FestivalPage.css'
class FestivalPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      festival: null
    }
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
            <h2 className="ui center aligned header">{festival.name}</h2>
            
            <img className="Image-Header" src={festival.image} alt="magical experience"></img>
            <div className="ui buttons four wide">
              <a href={explore} className="fluid ui positive button massive">EXPLORE</a>
              <div className="or" data-text="or"></div>
              <button onClick={this.props.history.goBack} className="ui negative button massive">Back</button>
            </div>
          </div>

        : loading }
      </div>
    )
  }
}

export default FestivalPage
