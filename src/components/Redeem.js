import React from 'react';
import { motion } from 'framer-motion';

const Redeem = () => {
  return (
    <motion.div
      className="redeem-page fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Redeem Your GeekBits</h1>
      <p>Use the links below to redeem your GeekBits or points:</p>

      <div className="redeem-buttons">
        <a
          href="https://practice.geeksforgeeks.org/reward"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button whileHover={{ scale: 1.1 }}>
            Redeem on GeeksforGeeks
          </motion.button>
        </a>

        <a
          href="https://leetcode.com/store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button whileHover={{ scale: 1.1 }}>
            Redeem on LeetCode
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
};

export default Redeem;
