import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Innomatics Research Labs is dedicated to pioneering research in data science and AI.
      </p>

      <h2 className="journey-title">Our Journey</h2>

      <section className="journey-section">
        <h3 className="journey-heading">Humble Beginnings</h3>
        <p className="journey-text">
          Innomatics Research Labs came a long way since those humble beginnings in 2018 intending to ‘Transform the Career and Lives’ of individuals in the competitive world by upskilling their careers and creating a balance between learning and real-time application in businesses.
        </p>

        <h3 className="journey-heading">Transforming Careers</h3>
        <p className="journey-text">
          Innomatics believes and follows a practical approach rather than a theoretical one, making every individual ready to face industry challenges through real-time applications.
        </p>

        <h3 className="journey-heading">Scaling to New Heights</h3>
        <p className="journey-text">
          We were awarded as one of the most prominent training institutes in Hyderabad for our cutting-edge training methodologies, spacious classrooms, and expert trainers.
        </p>

        <h3 className="journey-heading">Expanding Horizons</h3>
        <p className="journey-text">
          Innovation is our tradition; we aim to leave our mark in various sectors by introducing courses in Investment Banking, AWS, and Microsoft Azure.
        </p>

        <h3 className="journey-heading">Stepping to Online</h3>
        <p className="journey-text">
          We encourage learning, be it online or in classrooms. With this in mind, we’ve introduced online courses that offer self-paced, flexible learning.
        </p>

        <h3 className="journey-heading">And the Mission Continues</h3>
        <p className="journey-text">
          With 40+ trainers from leading organizations such as Apple and Microsoft, 50+ batches, and 1500 students trained and placed in top companies, our mission of transforming careers continues.
        </p>
      </section>
    </div>
  );
}

export default About;
