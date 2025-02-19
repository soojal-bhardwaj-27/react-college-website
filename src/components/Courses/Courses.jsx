import "./Courses.css";

const Courses = () => {
  return (
    <section className="course">
      <h1>PAPER SUBMISSION GUIDELINES</h1>
      <p style={{display: "table", margin: "0 auto", textAlign: "left"}}>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>Paper length: Maximum 8 pages with A4 size sheets</span>
        </span>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>Font: Times New Roman</span>
        </span>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>Margins: Left - 1.5 inch; Right, Top & Bottom - 1.0 inch</span>
        </span>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>Abstract: 11 point italic, single line spacing (after title)</span>
        </span>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>Keywords: Maximum 6 keywords</span>
        </span>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>Main Text: 12 point normal justified</span>
        </span>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>Paragraph Heading: 12 point bold sentence case, 1.5 line spacing</span>
        </span>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>Author Requirements: At least one author must register and present the paper</span>
        </span>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>Maximum Authors: 4 authors per paper</span>
        </span>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>Corresponding Author: Email must be provided</span>
        </span>
        <span style={{color: "#f44336", display: "table-row"}}>
          <span style={{display: "table-cell", paddingRight: "10px", paddingBottom: "8px"}}>•</span>
          <span style={{display: "table-cell"}}>For detailed formatting, download template from conference website</span>
        </span>
      </p>
      <div className="row">
        <div className="course-col">
          <h3>Conference Theme</h3>
          <p>
          NECETTE-2025 focuses on the intersection of e-commerce and emerging technologies in education. The conference aims to explore how digital commerce solutions and cutting-edge technologies are transforming the educational landscape. 
          <br></br><span style={{textShadow: "2px 2px 4px rgba(0,0,0,0.3)", fontWeight: "bold"}}>Key areas include:</span>
          <br></br><span style={{color: "#f44336"}}>• Online learning platforms and e-conference integration</span>
          <br></br><span style={{color: "#4CAF50"}}>• Educational technology trends and innovations</span>
          <br></br><span style={{color: "#2196F3"}}>• Digital transformation in academic institutions</span>
          <br></br><span style={{color: "#9C27B0"}}>• Future of technology-enabled education</span>
          </p>
        </div>
        <div className="course-col">
          <h3>Objectives of the Conference</h3>
          <p style={{ lineHeight: "2", paddingTop: "10px" }}>
            <span style={{color: "#f44336", fontWeight: "500"}}>• Knowledge Sharing: </span>
            <span style={{ marginLeft: "8px" }}>Platform for researchers, academicians, and industry experts to share insights and innovations.</span>
            
            <br></br><span style={{color: "#4CAF50", fontWeight: "500"}}>• Networking Opportunities: </span>
            <span style={{ marginLeft: "8px" }}>Facilitate collaboration among professionals, scholars, and students.</span>
            
            <br></br><span style={{color: "#2196F3", fontWeight: "500"}}>• Technological Advancements: </span>
            <span style={{ marginLeft: "8px" }}>Explore recent trends and emerging technologies in education.</span>
            
            <br></br><span style={{color: "#9C27B0", fontWeight: "500"}}>• Skill Enhancement: </span>
            <span style={{ marginLeft: "8px" }}>Engage participants through discussions, workshops, and expert sessions.</span>
            
            <br></br><span style={{color: "#f44336", fontWeight: "500"}}>• Encouraging Research: </span>
            <span style={{ marginLeft: "8px" }}>Promote research activities and foster intellectual growth.</span>
            
            <br></br><span style={{color: "#4CAF50", fontWeight: "500"}}>• Global Participation: </span>
            <span style={{ marginLeft: "8px" }}>Enable accessibility to broader audience across geographical locations.</span>
            
            <br></br><span style={{color: "#2196F3", fontWeight: "500"}}>• Industry-Academia Collaboration: </span>
            <span style={{ marginLeft: "8px" }}>Bridge the gap between academic research and industry practices.</span>
          </p>
        </div>
        <div className="course-col">
          <h3>IDEA OF THE CONFERENCE</h3>
          <p>
            <span style={{color: "#f44336"}}>• Augmented & Virtual Reality</span>
            <br></br><span style={{color: "#4CAF50"}}>• Artificial Intelligence</span>
            <br></br><span style={{color: "#2196F3"}}>• Cloud Technology</span>
            <br></br><span style={{color: "#9C27B0"}}>• Cyber Physical Systems & Cyber Security</span>
            <br></br><span style={{color: "#f44336"}}>• Engineering Education of the Future</span>
            <br></br><span style={{color: "#4CAF50"}}>• Industry 4.0</span>
            <br></br><span style={{color: "#2196F3"}}>• Learning in Virtual Environments</span>
            <br></br><span style={{color: "#9C27B0"}}>• Smart Education</span>
            <br></br><span style={{color: "#f44336"}}>• Virtual & Remote Labs</span>
            <br></br><span style={{color: "#4CAF50"}}>• Green Automation 4.0</span>
          </p>
        </div>
        <div className="course-col">
          <h3>About Raffles University, Neemrana</h3>
          <p style={{ lineHeight: "2", paddingTop: "10px" }}>
            <span style={{color: "#f44336", fontWeight: "500"}}>• Academic Excellence: </span>
            <span style={{ marginLeft: "8px" }}>Ranked among top institutions with world-class faculty and cutting-edge research facilities.</span>
            
            <br></br><span style={{color: "#4CAF50", fontWeight: "500"}}>• Global Recognition: </span>
            <span style={{ marginLeft: "8px" }}>Internationally accredited programs with partnerships across 50+ countries worldwide.</span>
            
            <br></br><span style={{color: "#2196F3", fontWeight: "500"}}>• Innovation Hub: </span>
            <span style={{ marginLeft: "8px" }}>State-of-the-art research centers focusing on AI, biotechnology, and sustainable development.</span>
            
            <br></br><span style={{color: "#9C27B0", fontWeight: "500"}}>• Industry Connect: </span>
            <span style={{ marginLeft: "8px" }}>Strong ties with leading corporations ensuring 90% placement rate for graduates.</span>
            
            <br></br><span style={{color: "#f44336", fontWeight: "500"}}>• Diverse Community: </span>
            <span style={{ marginLeft: "8px" }}>Students and faculty from over 75 countries creating a rich multicultural environment.</span>
            
            <br></br><span style={{color: "#4CAF50", fontWeight: "500"}}>• Research Impact: </span>
            <span style={{ marginLeft: "8px" }}>Over 500 research publications annually with significant contributions to various fields.</span>
            
            <br></br><span style={{color: "#2196F3", fontWeight: "500"}}>• Student Success: </span>
            <span style={{ marginLeft: "8px" }}>Comprehensive support systems including mentorship, counseling, and career guidance services.</span>
          </p>
        </div>
        <div className="course-col">
          <h3>Paper Submission Guidelines</h3>
          <p style={{ lineHeight: "2", paddingTop: "10px" }}>
            <span style={{textShadow: "2px 2px 4px rgba(0,0,0,0.3)", fontWeight: "bold"}}>Paper Submission Requirements:</span>
            
            <br></br><span style={{color: "#f44336"}}>• Paper Length:</span> Should not exceed 8 pages (eight) with  A4 Size sheets
            
            <br></br><span style={{color: "#4CAF50"}}>• Font Style:</span> Times New Roman
            
            <br></br><span style={{color: "#2196F3"}}>• Margins:</span> Left = 1.5 Inch, Right, Top & Bottom = 1.0 Inch
            
            <br></br><span style={{color: "#9C27B0"}}>• Abstract Format:</span> 11 Point Italic with single line spacing (after title)
            
            <br></br><span style={{color: "#f44336"}}>• Keywords:</span> Maximum 6 (six) words
            
            <br></br><span style={{color: "#4CAF50"}}>• Text Format:</span> 12 Point normal justified
            
            <br></br><span style={{color: "#2196F3"}}>• Paragraph Heading:</span> 12 Point Bold Sentence case, 1.5 line spacing
            
            <br></br><span style={{color: "#9C27B0"}}>• Author Requirements:</span> At least one author must attend the conference
            
            <br></br><span style={{color: "#f44336"}}>• Author Limit:</span> Maximum 4 (Four) authors per paper
            
            <br></br><span style={{color: "#4CAF50"}}>• Contact Info:</span> Corresponding author's email required
            
            <br></br><span style={{color: "#2196F3"}}>• Additional Details:</span> Download paper template from conference website
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
