import "./Campus.css";

const Campus = () => {
  return (
    <section className="campus" style={{ padding: "40px 20px" }}>
      <div style={{
        backgroundColor: "#2c3e50",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "30px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "0 auto 40px"
      }}>
        <h1 style={{ 
          textAlign: "center", 
          fontWeight: "bold",
          color: "#fff",
          margin: 0
        }}>
          Our Partners & Publication Details
        </h1>
      </div>

      <div className="row" style={{ 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        gap: "30px"
      }}>
        <img 
          src="/images/wb.png"
          alt="Our Partners"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            margin: "0 auto",
            display: "block",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "transform 0.3s ease",
          }}
        />

        <div style={{
          backgroundColor: "#f8f9fa",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "600px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{
            color: "#2c3e50",
            marginBottom: "20px",
            textAlign: "center",
            borderBottom: "2px solid #e74c3c",
            paddingBottom: "10px"
          }}>
            Publication Information
          </h3>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}>
            <div style={{ 
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}>
              <span style={{ color: "#e74c3c", fontWeight: "bold" }}>Selection Process: </span>
              <span style={{ color: "#444" }}>All papers will undergo through peer review process.</span>
            </div>

            <div style={{ 
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}>
              <span style={{ color: "#27ae60", fontWeight: "bold" }}>Publication Options: </span>
              <span style={{ color: "#444" }}>Refereed/ISBN no. Book or Web of Science indexed journal.</span>
            </div>

            <div style={{ 
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}>
              <span style={{ color: "#2980b9", fontWeight: "bold" }}>Charges: </span>
              <span style={{ color: "#444" }}>No additional charges for book publication, concessional page charges for journal.</span>
            </div>

            <div style={{ 
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}>
              <span style={{ color: "#8e44ad", fontWeight: "bold" }}>Submission: </span>
              <span style={{ color: "#444" }}>Submit papers through the registration link.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
