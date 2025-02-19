import React from 'react';
import Courses from '../components/Courses/Courses';
import Navbar from '../components/Navbar/Navbar';

const CallForPapers = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <div className="text-box">
          <h1>Call for Papers</h1>
          <p>National E-conference on Emerging Trends of Technology in Education (NECETTE-2025)</p>
        </div>
        <Courses />
      </div>
    </>
  );
};

export default CallForPapers; 