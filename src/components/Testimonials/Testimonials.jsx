import "./Testimonials.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Chairperson Says</h1>
      <p>
        Insights and vision from our esteemed leadership guiding AETSI-2025.
      </p>
      <div className="row">
        <div className="testimonial-col">
          <img 
            src="/images/chairperson1.jpg" 
            alt="Chairperson" 
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #f44336",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              margin: "20px auto",
              display: "block"
            }}
          />
          <div>
            <p>
              &quot;Be inspired, broaden your horizons, aim for excellence and achieve all your dreams.&quot;
            </p>
            <h3>Late Shri Vinod Kumar Gomber</h3>
            <p className="designation">Chairperson, RAFFLES UNIVERSITY</p>
          </div>
        </div>

        <div className="testimonial-col">
          <img 
            src="/images/chairperson2.jpg" 
            alt="Co-Chairperson" 
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #4CAF50",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              margin: "20px auto",
              display: "block"
            }}
          />
          <div>
            <p>
              &quot;We are dedicated to creating a platform where educators, researchers and 
              industry experts can collaborate and share innovative ideas that will transform 
              the educational landscape through emerging technologies.&quot;
            </p>
            <h3>Dr. Justice Meena V. Gomber</h3>
            <p className="designation">THE SPONSORING BODY , RAFFLES UNIVERSITY</p>
          </div>
        </div>

        <div className="testimonial-col">
          <img 
            src="/images/chairperson3.jpg" 
            alt="Vice-Chairperson" 
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #2196F3",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              margin: "20px auto",
              display: "block"
            }}
          />
          <div>
            <p>
              &quot;Innovation in education is key to preparing our students for the challenges 
              of tomorrow. Through technology and dedication, we can create impactful learning 
              experiences.&quot;
            </p>
            <h3> Shri Vivek Gomber</h3>
            <p className="designation">CHAIRPERSON, RAFFLES UNIVERSITY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
