import React, {Component} from 'react';

class FestivalShow extends Component {
  render() {
    console.log(this.props.match.params.name)
    return(
      <div>
        <h3> </h3>
      </div>
    )
  }
}

export default FestivalShow;
