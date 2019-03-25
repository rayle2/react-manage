import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        {this.props.children}
      </div>
    );
  }
}

export default App;
