import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cta.css";

const Cta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`cta ${isVisible ? 'fade-in' : ''}`}>
      <div className="conference-animation">
        <div className="conference-icon">
          <i className="fas fa-video"></i>
        </div>
        <div className="pulse-circles">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className="conference-text">
        <h1 className="slide-up">
          (Join AETSI-2025)
          <br />
          <span className="highlight">(Two Day National Conference on Application of Emerging Technologies
            in Science and Innovation)
            <h2>RAFFLES UNIVERSITY, NEEMRANA</h2>
          </span>
        </h1>
        
        <div className="stats-container">
          <div className="stat bounce-in">
            <span className="number">50+</span>
            <span className="label">Speakers</span>
          </div>
          <div className="stat bounce-in delay-1">
            <span className="number">1000+</span>
            <span className="label">Attendees</span>
          </div>
          <div className="stat bounce-in delay-2">
            <span className="number">20+</span>
            <span className="label">Sessions</span>
          </div>
        </div>

        <Link to="/register" className="conference-btn">
          Register Now
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
