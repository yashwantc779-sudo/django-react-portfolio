import React from "react";
import { FaBullseye, FaEye, FaCode } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2>About Me</h2>

          <p>
            I'm a passionate Python Full Stack Developer who enjoys building
            secure, scalable, and user-friendly web applications using modern
            technologies.
          </p>
        </div>

        <div className="about-content">
          {/* Left Side */}
          <div className="about-text">
            <h3>Building Modern Web Applications with Python</h3>

            <p>
              I specialize in Python, Django, Django REST Framework, React.js,
              MySQL, HTML, CSS, Bootstrap, and JavaScript. My focus is on
              developing clean, efficient, and scalable web applications that
              solve real-world problems.
            </p>

            <p>
              I have hands-on experience creating REST APIs, implementing user
              authentication, database management, and integrating frontend
              applications with backend services. I enjoy writing maintainable
              code and following best development practices.
            </p>

            <p>
              I'm continuously improving my technical skills by working on
              real-world projects, learning new technologies, and exploring
              modern software development practices.
            </p>

            <ul className="about-points">
              <li>🐍 Python Programming</li>
              <li>🚀 Django & Django REST Framework</li>
              <li>⚛️ React.js Development</li>
              <li>🗄️ MySQL & SQLite Database</li>
              <li>🔗 REST API Development & Integration</li>
              <li>💻 HTML5, CSS3, Bootstrap & JavaScript</li>
              <li>🔧 Git, GitHub & Postman</li>
              <li>📱 Responsive Web Design</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="about-cards">
            <div className="card">
              <span className="icon">
                <FaBullseye />
              </span>

              <h4>My Goal</h4>

              <p>
                To build high-quality, secure, and scalable web applications
                while continuously learning new technologies and delivering
                value through software development.
              </p>
            </div>

            <div className="card">
              <span className="icon">
                <FaEye />
              </span>

              <h4>My Vision</h4>

              <p>
                To become a skilled Full Stack Developer who contributes to
                innovative software products and helps organizations solve
                real-world challenges through technology.
              </p>
            </div>

            <div className="card">
              <span className="icon">
                <FaCode />
              </span>

              <h4>My Strengths</h4>

              <p>
                Problem-solving, clean coding practices, teamwork, continuous
                learning, adaptability, and building responsive, user-friendly
                web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}