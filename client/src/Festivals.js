import React, {Component} from 'react'
import Client from './Client'
import FestivalRow from './Festival'
import { Route } from 'react-router-dom'

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
          <tr key={index}>
          <td>
          <FestivalRow festival={festival} />
          </td>
          </tr>
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
        <Route path="/festivals/:name" component={FestivalRow} />
      </div>
    )
  }
}

export default Festivals
