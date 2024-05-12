import React, { useState } from "react";
import logo from "./logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img src={logo} alt="Logo" className="logo" /> 
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/MedicalProject">Home</a>
        <a href="/MedicalProject/contact">Contact</a>
        <a href="/MedicalProject/signup">Signup</a>
        <a href="/MedicalProject/login">Login</a>
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
