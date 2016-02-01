import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/searchBox';

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      iata: null,
    };

    this.getLoc();
  }



  getLoc() {
    const _this = this;
    $.get("/api/v1/locate", function ( data ) {
      console.log(data);
      _this.setState({iata: data.iata});
    });
  }

  render() {
    return(
      <div>
        <SearchBox iata = {this.state.iata} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
