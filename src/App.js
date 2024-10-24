import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Internship from './Internship';  // Renamed Design to Internship
import Courses from './Courses';  // Renamed Development to Courses
import './App.css';  // Keep your CSS import

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            Contact
          </NavLink>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/*" element={<Services />}>
            <Route path="internship" element={<Internship />} />  {}
            <Route path="courses" element={<Courses />} />  {}
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
