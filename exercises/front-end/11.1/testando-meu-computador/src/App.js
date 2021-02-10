import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import MyInfo from './Component';

class App extends Component {
  render() {
    return (
      <div>
        <MyInfo />
      </div>
    );
  }
}

export default App;
