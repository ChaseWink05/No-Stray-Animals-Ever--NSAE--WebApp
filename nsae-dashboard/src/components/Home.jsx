import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <h1>Welcome to No Stray Animals Ever (NSAE)</h1>
        <p>
          We rescue and shelter stray animals. Learn more about our mission or sign up to volunteer!
        </p>
        <h3>Contact Information</h3>
        <p>📍 NSAE Office: 1 Main Street, Dreamland, DL 00000, ULTRA PLANET</p>
        <p>📍 Safari Park: 2 Park Street, Dreamland, DL 00000, ULTRA PLANET</p>
        <p>📧 Contact HR: <a href="mailto:hr@nsae.org">hr@nsae.org</a></p>
        
        <Link to="/signup" className="button">Become a Volunteer</Link>
        <Link to="/login" className="button">Login</Link>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>📍 NSAE Office: 1 Main Street, Dreamland, DL 00000, ULTRA PLANET</p>
          <p>📍 Safari Park: 2 Park Street, Dreamland, DL 00000, ULTRA PLANET</p>
          <p>📧 Contact HR: <a href="mailto:hr@nsae.org">hr@nsae.org</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Home;