
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentB from './ComponentB.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello from app Component</h2>
        <ComponentB></ComponentB>
      </div>
    );
  }
}

export default App;
