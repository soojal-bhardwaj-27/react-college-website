import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>GALLERY</h1>
      <div className="row">
        <div className="facilities-col">
          <img src="/images/eng.png" alt="" />
          <div style={{
            padding: "15px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            marginTop: "-20px",
            position: "relative"
          }}>
            <h3>School of Engineering</h3>
            <p>State-of-the-art engineering labs and research facilities equipped with modern technology and tools.</p>
          </div>
        </div>
        <div className="facilities-col">
          <img src="/images/law.png" alt="" />
          <div style={{
            padding: "15px", 
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            marginTop: "-20px",
            position: "relative"
          }}>
            <h3>Prize Distribution</h3>
            <p>Recognition and awards ceremony for outstanding research papers and presentations.</p>
          </div>
        </div>
        <div className="facilities-col">
          <img src="/images/audi.png" alt="" />
          <div style={{
            padding: "15px",
            backgroundColor: "#fff", 
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            marginTop: "-20px",
            position: "relative"
          }}>
            <h3>Main Auditorium</h3>
            <p>Spacious auditorium with advanced audio-visual systems for conferences and cultural events.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
