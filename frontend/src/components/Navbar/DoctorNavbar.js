import React, { useState } from "react";
import logo from "../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img src={logo} alt="Logo" className="logo" /> 
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/MedicalProject/doctor">Home</a>
        <a href="/MedicalProject">Logout</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
