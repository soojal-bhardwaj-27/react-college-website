import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>About Raffles University</h1>
          <p>
            Raffles University, established under the Raffles University, Neemrana Act, 2011, is a premier institution 
            of higher learning committed to excellence in education. Located in Neemrana, Rajasthan, the university 
            offers diverse programs across multiple disciplines including Engineering, Management, Law, and more. 
            With state-of-the-art infrastructure and experienced faculty, we strive to provide quality education 
            that prepares students for global challenges.
          </p>
          <a 
            href="https://www.rafflesuniversity.edu.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="about-more-btn"
            style={{
              display: "inline-block",
              padding: "12px 34px",
              backgroundColor: "#f44336",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              marginTop: "20px",
              marginBottom: "40px"
            }}
          >
            ABOUT MORE
          </a>

          <h1>Message from the Vice Chancellor</h1>
          <p>
            As the Vice Chancellor of Raffles University, I am proud to welcome you to AETSI-2025. 
            Our institution has always been at the forefront of technological innovation and academic excellence. 
            This international conference represents our commitment to fostering research, innovation, and 
            collaboration across borders. I believe that through such platforms, we can create meaningful 
            dialogue and drive positive change in the field of engineering and technology.
            I extend my best wishes to all participants and look forward to the groundbreaking discussions 
            and insights that will emerge from this conference.
          </p>
          <p style={{marginTop: "20px", fontWeight: "bold"}}>
          President, Prof. (Dr.) Rajender Sangwan, FNA, FNASc, FNAAS<br/>
            Vice Chancellor<br/>
            Raffles University, Neemrana
          </p>

          <h1>Message from the Convener</h1>
          <p>
            As the Professor of the School of Engineering and Technology and Convener of AETSI-2025, 
            I am delighted to welcome you to this international conference. In today's rapidly evolving 
            technological landscape, it is crucial that we create platforms for sharing cutting-edge research 
            and innovations. AETSI-2025 aims to bring together researchers, academicians, and industry experts 
            to exchange ideas and foster collaborations that will shape the future of technology.
            We look forward to your valuable contributions and participation in making this conference 
            a great success.
          </p>
          <p style={{marginTop: "20px", fontWeight: "bold"}}>
            Dr. Jaspreet Hira<br/> 
            Convener, AETSI-2025<br/>
            Professor, School of Engineering and Technology<br/>
            Raffles University, Neemrana
          </p>
        </div>
        <div className="about-col" style={{
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: "120px",  // Increased gap between images
          marginTop: "280px"  // Adjusted to align with VC's message
        }}>
          <div className="profile-container">
            <img 
              src="/images/vcsir.jpg" 
              alt="President, Prof. (Dr.) Rajender Sangwan" 
              style={{
                width: "300px",
                height: "450px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "3px solid #f44336",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                padding: "5px",
                backgroundColor: "white"
              }}
            />
            <h3 style={{marginTop: "20px", textAlign: "center", color: "#333"}}>President, Prof. (Dr.) Rajender Sangwan<br/>Vice Chancellor</h3>
            <p style={{textAlign: "center", color: "#666", fontStyle: "italic"}}>Raffles University</p>
          </div>
          <div className="profile-container" style={{
            marginTop: "40px"  // Added extra margin to align with convener's message
          }}>
            <img 
              src="/images/deansir.jpg" 
              alt="Dr. Jaspreet Hira - convener" 
              style={{
                width: "300px",
                height: "450px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "3px solid #f44336",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                padding: "5px",
                backgroundColor: "white"
              }}
            />
            <h3 style={{marginTop: "20px", textAlign: "center", color: "#333"}}>Prof (Dr.) Jaspreet Hira <br/> Convener AETSI-2025 <br/></h3> 
            <p style={{textAlign: "center", color: "#666", fontStyle: "italic"}}>School of Engineering and Technology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
