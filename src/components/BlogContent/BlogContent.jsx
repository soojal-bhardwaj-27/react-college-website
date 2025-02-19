import "./BlogContent.css";

const BlogContent = () => {
  return (
    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src="/images/speaker.jpg" alt="" />
          <h2 style={{
            padding: "15px",
            border: "2px solid #f44336",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            textAlign: "center"
          }}>SPEAKER GUIDELINES</h2>
          
          {/* Important Dates Table */}
          <div className="table-wrapper" style={{ marginBottom: "20px" }}>
            <h2 className="section-title" style={{
              padding: "10px",
              border: "2px solid #2196F3",
              borderRadius: "8px", 
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              textAlign: "center"
            }}>Important Dates</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{width: "60%"}}>Event</th>
                  <th style={{width: "40%"}}>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Paper Abstract Submission</td>
                  <td style={{textAlign: "center"}}>MARCH 5, 2025</td>
                </tr>
                <tr>
                  <td>Acceptance of Paper Abstract</td>
                  <td style={{textAlign: "center"}}>MARCH 8, 2025</td>
                </tr>
                <tr>
                  <td>Full Length of Paper Submission</td>
                  <td style={{textAlign: "center"}}>March 7, 2025</td>
                </tr>
                <tr>
                  <td>Camera Ready Paper</td>
                  <td style={{textAlign: "center"}}>March 11, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="speaker-guidelines">
            <div className="guideline-card">
              <h3 style={{
                padding: "10px",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                textAlign: "center"
              }}>Presentation Preparation</h3>
              <ul>
                <li>Prepare clear, visually appealing slides with large fonts and high-contrast colors</li>
                <li>Keep content concise and engaging, avoiding text-heavy slides</li>
                <li>Include practical examples and case studies</li>
                <li>Stay within 15-20 minute time limit</li>
              </ul>
            </div>

            <div className="guideline-card">
              <h3 style={{
                padding: "10px",
                border: "2px solid #9C27B0",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                textAlign: "center"
              }}>Technical Setup</h3>
              <ul>
                <li>Use stable internet connection</li>
                <li>Test microphone, webcam and screen-sharing beforehand</li>
                <li>Ensure proper lighting and quiet environment</li>
                <li>Keep backup presentations in multiple formats</li>
              </ul>
            </div>

            <div className="guideline-card">
              <h3 style={{
                padding: "10px",
                border: "2px solid #f44336",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                textAlign: "center"
              }}>Delivery & Engagement</h3>
              <ul>
                <li>Begin with an engaging introduction</li>
                <li>Maintain conversational and energetic tone</li>
                <li>Interact through Q&A sessions and polls</li>
                <li>Speak clearly at a moderate pace</li>
              </ul>
            </div>

            <div className="guideline-card">
              <h3 style={{
                padding: "10px",
                border: "2px solid #2196F3",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                textAlign: "center"
              }}>Virtual Etiquette & Post-Presentation</h3>
              <ul>
                <li>Join 10 minutes before scheduled time</li>
                <li>Mute when not speaking</li>
                <li>Be available for networking session</li>
                <li>Share presentation materials if permitted</li>
              </ul>
            </div>
          </div>

          <div className="comment-box">
            <form>
              {/* Add your comment form content here */}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogContent;
