import React, { Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


import './App.css';

const numbers = [ ...Array(100).keys() ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerValue: 'Hello World - Click A Button',
      numberValue: [],
    }
  };

  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="App-header">{this.state.headerValue}</h1>
        </Jumbotron>
        <Jumbotron>
          <div className="App">
            {numbers.map(buttonValue => (
              <button onClick={() => this.setState({buttonValue})}>
                {buttonValue}
              </button>
            ))}
          </div>
        </Jumbotron>
      </Container>
    );
  }
};

export default App;
