import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Application from './pages/Application/Application'
import Posting from './pages/Posting/Posting'
class App extends Component {
    render() {
      return (
       <Router>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/Application" component={Application} />
    <Route path="/Posting" component={Posting} />
  </div>
  </Router>
      )
    }
  }
  export default App