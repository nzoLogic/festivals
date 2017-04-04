import React, {Component} from 'react'
import Client from './Client'
import FestivalRow from './Festival'

class Festivals extends Component {
  constructor(props){
    super(props)
    this.state = {
      festivals: []
    }
  }

  getFestivals = Client.search(this.props.match.url, (response) => this.setState({festivals: response}))

  render() {
    const festivalRow =
      this.state.festivals.map((festival, index) => {
        return(
          <FestivalRow festival={festival} key={index} />
        )
      })
    return(
      <div className="ui container">
        <h3>Upcoming Festivals</h3>
        <table className="ui selectable structured table">
          <tbody>
            {festivalRow}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Festivals
