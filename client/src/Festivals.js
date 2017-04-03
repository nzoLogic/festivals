import React, {Component} from 'react'
import Client from './Client'
import FestivalRow from './Festival'
import FestivalPage from './FestivalPage'
import { Route } from 'react-router-dom'

class Festivals extends Component {
  constructor(props){
    super(props)
    this.state = {
      festivals: []
    }
  }
//calls the API to return all festivals
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
        <Route path="/festivals/:name" render={({ match }) => (
            <FestivalPage festival={this.state.festivals.find(f => f.name === match.params.name)} />
          )} />
      </div>
    )
  }
}

export default Festivals
