import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <div style={{ marginTop: "60px" }}>
        <h1>Two Days</h1>
        <h1>National E-Conference on </h1>
        <h1>Applications of Emerging Technologies in Science and Innovations</h1>
        <h2>(AETSI-2025)</h2>
        <p>
          Organised by : School of Engineering and Technology <br />
          Sponsored by : RAFFLES UNIVERSITY, Neemrana
        </p>
      </div>
      <p style={{ 
        border: "1px solid #fff", 
        padding: "10px", 
        display: "inline-block",
        marginTop: "20px",
        marginBottom: "20px"
      }}>
        Date: 10th - 11th march 2025
      </p>
      
      <Link to="/register" className="hero-btn">
        Register Now
      </Link>
    </div>
  );
};

export default TextBox;
