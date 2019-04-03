import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Locked from './components/Locked';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Login />
        <Locked />
      </div>
    );
  }
}

export default App;
