import React, { Component } from 'react';
import Client from './Client';
class Festival extends Component {
  constructor (props) {
    super()
    this.state ={
      festivals: []
    }
  }
  getFestivals = Client.search((response)=> {
    this.setState({festivals: response})
  });
  render() {
    const festivalRow = this.state.festivals.map((festival, index) => {
      return (<tr key={index}>
        <td>{festival.name}</td>
        <td>{festival.location}</td>
        </tr>)
      })
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th><h5>Festivals</h5></th>
            </tr>
          </thead>
          <tbody>
            {festivalRow}
          </tbody>
        </table>
      </div>
    );
  }
}


export default Festival;
