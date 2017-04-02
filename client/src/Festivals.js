import React, {Component} from 'react'
import Client from './Client'
import FestivalRow from './Festival'
import { Link, Route } from 'react-router-dom'

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
      <div>
        <h3>Festivals</h3>
        <table className="ui selectable structured large table">
          <thead colSpan="5">
          <tr>
            <td><h3>Upcoming Festivals</h3></td>
          </tr>
          </thead>
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
