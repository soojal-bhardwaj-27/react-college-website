import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        Raffles University is committed to delivering excellence in education and 
        research. With a state-of-the-art campus, world-class faculty, and a 
        student-centric approach, we strive to create leaders of tomorrow. 
        Explore our diverse academic programs and experience holistic development 
        in an enriching environment.
      </p>

      <div className="icons">
        <a href="https://www.facebook.com/RafflesUniversityNeemrana" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="fab" />
        </a>
        <a href="https://twitter.com/RafflesUni" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className="fab" />
        </a>
        <a href="https://www.instagram.com/rafflesuniversity/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="fab" />
        </a>
        <a href="https://www.linkedin.com/school/raffles-university-neemrana/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
        </a>
        <a href="https://www.youtube.com/@rafflesuniversityneemrana" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="fab" />
        </a>
      </div>

      <p>
        Made with <FontAwesomeIcon icon={faGraduationCap} className="fa-graduation-cap" /> by SOET
      </p>
    </section>
  );
};

export default Footer;
