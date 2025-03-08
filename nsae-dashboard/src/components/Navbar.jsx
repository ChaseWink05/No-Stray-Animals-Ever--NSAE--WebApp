import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../Images/Logo.jpg"; // Import the image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="hamburger-menu">
        <div className="hamburger-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="dropdown-content">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/volunteer">Volunteer</Link>
        </div>
      </div>
      <div className="navbar-logo">
        <img src={logo} alt="NSAE Logo" /> {/* Use the imported image */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;