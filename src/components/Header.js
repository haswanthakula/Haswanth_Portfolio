import React, { useState } from "react";
import './Header.css';

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenuClick = () => {
        setMenuToggle(!menuToggle);
    };

    return (
        <header>
            <a href="/" className="logo">
                <span>H</span>aswanth
            </a>

            <div
                id="menu"
                className={`fas fa-bars ${menuToggle ? "fa-times" : ""}`}
                onClick={handleMenuClick}
            ></div>

            <nav className={`navbar ${menuToggle ? "nav-toggle" : ""}`}>
                <ul>
                    <li><a className="active" href="Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Education">Education</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Certifications">Certifications</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
