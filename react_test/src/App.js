import React, { Component } from 'react';
import NoteM from './components/NoteManager'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Hello, world! </h1>
        <NoteM/> 
      </div>
    );
  }
}

export default App;
