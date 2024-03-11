// TopBar.js

import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <nav>
        <ul>
          <li><a href = "/MedicalProject">Home</a></li>
          <li><a href="/MedicalProject/contact">Contact</a></li>
          <li><a href="/MedicalProject/signup">Signup</a></li>
          <li><a href="/MedicalProject/login">Login</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
