import React from 'react';
import Header from './components/Header';
import './App.css';
// import MainContent from "./components/MainContent";
import Footer from './components/Footer';
import Hero from './components/Hero';

import Cards from './components/Cards';
function App() {
  return (
    <div>
      <Header />
      {/* <MainContent /> */}
      <div className="main">

        <Hero />
        <Cards />
      </div>
      <Footer />
    </div>
  )
}

export default App