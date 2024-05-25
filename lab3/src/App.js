import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import BrowseSection from './Components/BrowseSection'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <BrowseSection /> 
      </div>
    </Router>
  );
}

export default App;
