import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import Register from "../components/Register/Register";
import CallForPapers from "../pages/CallForPapers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/course" element={<Course />} />
      <Route path="/register" element={<Register />} />
      <Route path="/call-for-papers" element={<CallForPapers />} />
    </Routes>
  );
};

export default AppRoutes;
