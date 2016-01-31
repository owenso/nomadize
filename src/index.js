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
    var xhr = new XMLHttpRequest();

  	xhr.onreadystatechange = function() {
  	    if (xhr.readyState == XMLHttpRequest.DONE) {
            const locResult = JSON.parse(xhr.responseText);
  	        console.log(locResult);
            _this.setState({iata: locResult.iata});
  	    }
  	};
  	xhr.open("GET", "/api/v1/locate", true);
  	xhr.send(null);
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
