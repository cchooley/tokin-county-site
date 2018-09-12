import React, { Component } from 'react';
import Header from './Header.js'
import Hero from './Hero.js'
import MapContainer from './Map.js'
import Footer from './Footer.js'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <MapContainer />
      </div>
    );
  }
}

export default App;

