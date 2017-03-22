import React, { Component } from 'react';
import Client from './Client';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import FestivalShow from './FestivalShow';

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
    const festivalRow =

      this.state.festivals.map((festival, index) => {
      return (<tr key={index}>
        <td><Link to={festival.name}>{festival.name}</Link></td>
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
        <Route path="/:id" component={FestivalShow} />

      </div>
    );
  }
}


export default Festival;
