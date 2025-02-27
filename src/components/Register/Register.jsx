import Navbar from '../Navbar/Navbar';
import "./Register.css";

const Register = () => {
  return (
    <div style={{ 
      backgroundImage: "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/images/background.jpg')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Navbar />

      {/* Message Card */}
      <div className="message-card">
        <h3>Important Notice</h3>
        <p style={{ 
          fontSize: "18px", 
          fontWeight: "bold", 
          color: "#d9534f", 
          textAlign: "center",
          marginTop: "10px" 
        }}>
          GOOGLE form will be published after the acceptance of abstract.
        </p>
      </div>
    </div>
  );
};

export default Register;
