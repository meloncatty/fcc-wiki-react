import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

var SearchResults = React.createClass({
  render: function() {
    var resultsEntries = this.props.entries;

    function displayResults(results) {
      return <li key={results.key}>{results.text}</li>
    }

    var listResults = resultsEntries.map(displayResults);
  }
});

var SearchArea = React.createClass({
  getInitialState: function() {
    return {
      results: []
    };
  },
  addResult: function(e){
    var resultArray = this.state.results;
    resultArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );
    this.setState({
      results: resultArray
    });
    this._inputElement.value = "";
    e.preventDevault(); //keeps from triggering our browser's default POST behavior(which might refresh your page), and instead get our desired behavior
  },

  render: function() {
    return (
      <div className="searchAreaMain">
        <div className="header">
          <form onSubmit={this.addResult}>
            <input ref={(a) => this._inputElement = a} className="searchBox" type="text" placeholder="Search Wikipedia"></input>
            <button className="random">Random</button>
          </form>
        </div>
        <SearchResults entries={this.state.results}/>
      </div>
    )
  }
})

// var destination = document.querySelector("#root")

ReactDOM.render(
  <SearchArea />,
  document.getElementById('root')
);
