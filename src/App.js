import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Practice from './components/Practice';
import Redeem from './components/Redeem';
import './App.css';

function App() {
  // Generate random stars
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) { // Increased star count for a more immersive look
      const randomX = Math.random() * 100; // Random horizontal position
      const randomY = Math.random() * 100; // Random vertical position
      const randomDuration = Math.random() * 3 + 2; // Random duration between 2 and 5 seconds
      const randomDelay = Math.random() * 5; // Random delay
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            top: `${randomY}%`,
            left: `${randomX}%`,
            animationDuration: `${randomDuration}s`,
            animationDelay: `${randomDelay}s`,
          }}
        ></div>
      );
    }
    return stars;
  };

  return (
    <Router>
      <div id="root">
        {/* Falling stars background */}
        <div className="stars">
          {generateStars()}
        </div>

        {/* Center the content on the page */}
        <div className="app-container">
          <Header />
          <div className="page">
            <Routes>
              <Route path="/" element={<Practice />} />
              <Route path="/redeem" element={<Redeem />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
