import "./ContactComponent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactComponent = () => {
  return (
    <>
      <section className="contact-us">
        <div style={{ 
          width: "100%", 
          marginBottom: "30px",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
          {/* <iframe 
            width="100%" 
            height="450" 
            style={{ 
              border: 0,
              transition: "transform 0.3s ease"
            }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Directions to Raffles University"
          ></iframe> */}
        </div>

        <div className="row">
          <div className="contact-col">
            <div>
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>
                <h5>Raffles University, Neemrana</h5>
                <p>Japanese Zone, NH-8, Neemrana, Rajasthan 301020, India</p>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>
                <h5>+91 1494-672300</h5>
                <p>Monday to Saturday, 9AM to 5PM</p>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>
                <h5>info@rafflesuniversity.edu.in</h5>
                <p>Email us your query</p>
              </span>
            </div>
          </div>

          {/* <div className="contact-col">
            <form action="">
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter email address" required />
              <input type="text" placeholder="Enter your subject" required />
              <textarea rows="8" placeholder="Message" required></textarea>
              <button type="submit" className="hero-btn red-btn">
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
