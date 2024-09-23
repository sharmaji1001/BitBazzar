import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Practice = () => {
  const [currentBits, setCurrentBits] = useState('');
  const [targetBits, setTargetBits] = useState('');
  const [currentStreak, setCurrentStreak] = useState('');
  const [currentBonus, setCurrentBonus] = useState('');
  const [daysNeeded, setDaysNeeded] = useState(null);
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const calculateDays = () => {
    let currStreak = parseInt(currentStreak);
    let currBonus = parseInt(currentBonus);
    let target = parseInt(targetBits) - parseInt(currentBits);
    let remaining = 0;

    currBonus = 8 - currBonus;

    while (currStreak <= target) {
      if (currBonus === 8) {
        currStreak += 8;
        currBonus = 0;
        remaining++;
      }
      currStreak++;
      currBonus++;
      remaining++;
    }

    setDaysNeeded(remaining);
    setShowModal(true); // Show the modal with the result
  };

  return (
    <motion.div
      className="practice-page fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Track Your GeekBits</h1>
      <div className="potd-buttons">
        <a href="https://practice.geeksforgeeks.org/problem-of-the-day" target="_blank" rel="noopener noreferrer">
          <button>GFG POTD</button>
        </a>
        <a href="https://leetcode.com/problemset/all/" target="_blank" rel="noopener noreferrer">
          <button>LeetCode POTD</button>
        </a>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); calculateDays(); }}>
        <input
          type="number"
          placeholder="Current GeekBits"
          value={currentBits}
          onChange={(e) => setCurrentBits(e.target.value)}
        />
        <input
          type="number"
          placeholder="Target GeekBits"
          value={targetBits}
          onChange={(e) => setTargetBits(e.target.value)}
        />
        <input
          type="number"
          placeholder="Current Streak (Days)"
          value={currentStreak}
          onChange={(e) => setCurrentStreak(e.target.value)}
        />
        <input
          type="number"
          placeholder="Current Bonus (0-7)"
          value={currentBonus}
          onChange={(e) => setCurrentBonus(e.target.value)}
        />
        <motion.button type="submit"
          whileHover={{ scale: 1.1 }}
        >Calculate</motion.button>
      </form>

      <div className="button-container">
        <Link to="/redeem">
          <motion.button className="redirect-button">
            Go to Redeem Page
          </motion.button>
        </Link>
      </div>

      {/* Modal for displaying output */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <p>You need to continue POTD for just {daysNeeded} more days to reach {targetBits} GeekBits!</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Practice;
