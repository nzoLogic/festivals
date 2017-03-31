import React, {Component} from 'react'
import Client from './Client'

class Festivals extends Component {
  state = {
    festivals: null
  }
  componentDidMount() {
    Client.search((response) => this.setState({festivals: response}))
  }
  render() {
    return(
      <div>
        <h3>Festivals</h3>
      </div>
    )
  }
}

export default Festivals
