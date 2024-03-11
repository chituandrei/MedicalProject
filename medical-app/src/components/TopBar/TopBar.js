// TopBar.js

import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <nav>
        <ul>
          <li><a href = "/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/signup">Signup</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
