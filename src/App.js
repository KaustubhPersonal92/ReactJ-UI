import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Tab from './components/tabs/Tab';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <hr/>
        <Tab/>
      </div>
    );
  }
}

export default App;
