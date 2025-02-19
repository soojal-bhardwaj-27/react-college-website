import { useState } from "react";
import "./Register.css";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    researchPaper: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    // Password matching validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevData => ({
      ...prevData,
      researchPaper: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your registration logic here
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/images/background.jpg')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: "100px", // Height for the header area
      position: "relative"
    }}>
      <Navbar />
      <div className="register-container" style={{ 
        marginTop: "0px",
        backgroundColor: "#fff",
        position: "relative",
        zIndex: "1"
      }}>
        <div className="register-box">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
            <div className="form-group file-upload">
              <label htmlFor="researchPaper" className="file-upload-label">
                <i className="fas fa-cloud-upload-alt"></i>
                Upload Research Paper
              </label>
              <input
                type="file"
                id="researchPaper"
                name="researchPaper"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="file-input"
              />
              {formData.researchPaper && (
                <div className="file-name">
                  Selected: {formData.researchPaper.name}
                </div>
              )}
            </div>
            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
          <div className="login-link">
            Already have an account? <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 