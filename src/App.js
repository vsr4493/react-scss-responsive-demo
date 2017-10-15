import React, { Component } from 'react';
import './App.css';
import Wrapper from 'components/Wrapper';
import PinkSquare from 'components/PinkSquare';
import WhiteSquare from 'components/WhiteSquare';

class App extends Component {
  render() {
    return (
      <Wrapper>
      	<PinkSquare></PinkSquare>
      	<WhiteSquare></WhiteSquare>
      </Wrapper>
    );
  }
}

export default App;
