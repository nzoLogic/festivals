import React, {Component} from 'react'
import Client from './Client'
import { Link } from 'react-router-dom'

class Festivals extends Component {
  constructor(){
    super()
    this.state = {
      festivals: []
    }
  }

  getFestivals = Client.search((response) => this.setState({festivals: response}))

  render() {
    const festivalRow =
      this.state.festivals.map((festival, index) => {
        return(
          <tr key={index}>
          <td> {festival.name}</td>
          </tr>
        )
      })
    return(
      <div>
        <h3>Festivals</h3>
        <table className="ui selectable structured large table">
          <thead colSpan="5">
            <td><h3>Upcoming Festivals</h3></td>
          </thead>
          <tbody>
            {festivalRow}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Festivals
