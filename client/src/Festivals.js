import React, {Component} from 'react'
import Client from './Client'
import FestivalRow from './Festival'

class Festivals extends Component {
  constructor(props){
    super(props)
    this.state = {
      festivals: null
    }
  }

  getFestivals = Client.search(this.props.match.url, (response) => this.setState({festivals: response}))

  render() {
    const festivals = this.state.festivals
    const loader = <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
                </div>
    return(
      <div className="ui container">
        <h3>Upcoming Festivals</h3>

        <table className="ui selectable structured table">
          <tbody>
            {festivals ? festivals.map((festival, index) => {
              return(
                <FestivalRow festival={festival} key={index} />
              )
            }) : loader}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Festivals
