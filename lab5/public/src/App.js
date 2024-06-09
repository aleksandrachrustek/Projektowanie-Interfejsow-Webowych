import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import BrowseSection from './Components/BrowseSection';
import HotelDetails from './Components/HotelDetails';
import ChatRoom from './Components/ChatRoom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './Components/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<><HeroSection /><BrowseSection /></>} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/chat" element={<ChatRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
