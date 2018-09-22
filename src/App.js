import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from "./Pages/home.jsx";
import About from "./Pages/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          </div>
        </Router>
    );
  }
}

export default App;
