import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "/images/rlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="https://rafflesuniversity.edu.in/" target="_blank" rel="noopener noreferrer">
        <img 
          src={logo} 
          alt="Logo"
          className="navbar-logo"
        />
      </a>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <FontAwesomeIcon icon={faTimes} className="fas" onClick={closeMenu} />
        <ul>
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/about" onClick={closeMenu}>ABOUT UNIVERSITY</Link></li>
          <li><Link to="/course" onClick={closeMenu}>CALL FOR PAPER</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>SCHEDULE</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
          <li><Link to="/register" className="register-btn" onClick={closeMenu}>REGISTER</Link></li>
        </ul>
      </div>

      <FontAwesomeIcon icon={faBars} className="fas" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
