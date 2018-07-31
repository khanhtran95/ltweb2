import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import RouterURL from './components/RouterURL/RouterURL';
import { BrowserRouter as Router } from 'react-router-dom';
import MobilePage from './Pages/MobilePage';

class App extends Component {
  render() {
    return (
      <Router>
      <div>

        <Menu />    
        <RouterURL></RouterURL>
        
      </div>
      </Router>
    );
  }
}

export default App;
