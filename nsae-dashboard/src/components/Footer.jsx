import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>📍 NSAE Office: 1 Main Street, Dreamland, DL 00000, ULTRA PLANET</p>
                <p>📍 Safari Park: 2 Park Street, Dreamland, DL 00000, ULTRA PLANET</p>
                <p>📧 Contact HR: <a href="mailto:hr@nsae.org">hr@nsae.org</a></p>
            </div>
        </footer>
    );
}
export default Footer;
            