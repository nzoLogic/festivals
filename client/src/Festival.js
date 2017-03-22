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
        <td>{festival.date}</td>
        </tr>)
      })
    return (
      <div>
        <table className="ui selectable structured large table">
          <thead colSpan="5">
            <tr>
              <th><h5>Festivals</h5></th>
            </tr>
          </thead>
          <tbody>
            {festivalRow}
          </tbody>
        </table>
        <div className="ui card">
          <div className="content">
            <p className="header">Aaron</p>
            <div className="meta"><span className="date">Age: 25</span></div>
          </div>
        </div>
      </div>
    );
  }
}


export default Festival;
