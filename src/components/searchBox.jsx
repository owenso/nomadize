import React from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends React.Component {
  render() {
    return <form>
      <input type="text" name='airport'/>
      <br/>
      <input type="date" name='departure date'/>
      <br/>
      <input type='submit' value='Submit'/>
    </form>
  }
}

ReactDOM.render(<SearchBox/>, document.getElementById('container'));
