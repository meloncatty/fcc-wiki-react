import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Wikiviewer</h2>
          <hr></hr>
        <div className="Search-box">
          <input className="form-control" placeHolder="Search WikiViewer" type="text">
            <div className="input-group-button">

            </div>
          </input>
        </div>
        <p className="App-intro">
          Results go Here
        </p>
      </div>
    </div>
    );
  }
}

export default App;
