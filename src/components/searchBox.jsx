import React from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends React.Component {
  // render() {
  //   return <form>
  //     <input type="text" name='airport'/>
  //     <br/>
  //     <input type="date" name='departure date'/>
  //     <br/>
  //     <input type='submit' value='Submit'/>
  //   </form>
  // }

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    )
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 1};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <div>Webpack is doing its thing with React and ES2015. Aw shit son.</div>
        <div>{counter}</div>
      </header>
    );
  }
}

ReactDOM.render(<SearchBox/>, document.getElementById('container'));
