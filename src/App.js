import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from "./Pages/home.jsx";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          </div>
        </Router>
    );
  }
}

export default App;
