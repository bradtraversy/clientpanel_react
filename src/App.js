import React, { Component } from 'react';
import AppNavbar from './components/layout/AppNavbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <div className="container">{/* ROUTES */}</div>
      </div>
    );
  }
}

export default App;
