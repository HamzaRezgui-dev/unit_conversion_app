// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/length">Length</Link>
        </li>
        <li className="navbar-item">
          <Link to="/weight">Weight</Link>
        </li>
        <li className="navbar-item">
          <Link to="/temperature">Temperature</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;