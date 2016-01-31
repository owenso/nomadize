import React, {Component} from 'react';

class SearchBox extends Component {
  render() {
    return (
      <input type="text" value={this.props.iata}/>
    );
  }
}

module.exports = SearchBox;
