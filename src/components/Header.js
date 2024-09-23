// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Practice</Link></li>
          <li><Link to="/redeem">Redeem</Link></li>
          <li>
            <a href="https://practice.geeksforgeeks.org/reward" target="_blank" rel="noopener noreferrer">
              GFG Reward
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
