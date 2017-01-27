import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

var SearchArea = React.createClass({
  render: function() {
    return (
      <div className="searchAreaMain">
        <div className="header">
          <input className="searchBox" type="text" placeholder="Search Wikipedia"></input>
          <button className="random">Random</button>
        </div>
      </div>
    )
  }
})

// var destination = document.querySelector("#root")

ReactDOM.render(
  <SearchArea />,
  document.getElementById('root')
);
