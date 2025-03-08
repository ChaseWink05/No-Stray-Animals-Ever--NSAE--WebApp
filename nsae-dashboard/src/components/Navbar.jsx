import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="dropdown">
          <span>Menu</span>
          <div className="dropdown-content">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/volunteer">Volunteer</Link>
          </div>
        </li>
      </ul>
      <div className="navbar-logo">
        <img src="/logo.png" alt="NSAE Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;