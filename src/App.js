import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js'
import Hero from './Hero.js'
import Footer from './Footer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
