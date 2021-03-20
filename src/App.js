import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service'
import Portfolio from './Portfolio';
import Navbar from './Navbar';
import Footer from './Footer';




function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
