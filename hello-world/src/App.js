import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Greet name="Bruce"/>
        <Greet name="Clark"/>
        <Greet name="Diana"/>
        {/*<Welcome></Welcome>*/}
        {/*<Hello></Hello>*/}
      </div>
    );
  }
}

export default App;
