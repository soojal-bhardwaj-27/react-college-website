import "./Navbar.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "/images/rlogo.png";

const Navbar = () => {
  const navLinkRef = useRef();

  const showMenu = () => {
    if (navLinkRef.current) {
      navLinkRef.current.style.right = "0";
    }
  };

  const hideMenu = () => {
    if (navLinkRef.current) {
      navLinkRef.current.style.right = "-200px";
    }
  };

  return (
    <nav className="fixed">
      <a href="https://rafflesuniversity.edu.in/" target="_blank" rel="noopener noreferrer">
        <img 
          src={logo} 
          alt="Logo"
          className="navbar-logo"
        />
      </a>

      <div className="nav-links" ref={navLinkRef}>
        <FontAwesomeIcon icon={faTimes} className="fas" onClick={hideMenu} />
        <ul>
          <li><Link to="/" className="nav-item">HOME</Link></li>
          <li><Link to="/about" className="nav-item">ABOUT UNIVERSITY</Link></li>
          <li><Link to="/course" className="nav-item">CALL FOR PAPER</Link></li>
          <li><Link to="/blog" className="nav-item">SCHEDULE</Link></li>
          <li><Link to="/contact" className="nav-item">CONTACT</Link></li>
          <li><Link to="/register" className="nav-item register-btn">REGISTER</Link></li>
        </ul>
      </div>

      <FontAwesomeIcon icon={faBars} className="fas" onClick={showMenu} />
    </nav>
  );
};

export default Navbar;
