import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";
import { EmailDataPost } from "../Api/CoreApi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await EmailDataPost({ email });

      if (response) {
        setMessage("🎉 Thanks for subscribing!");
        setStatus("success");
        setEmail("");
      } else {
        setMessage("Subscription failed. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
      setStatus("error");
    }

    setTimeout(() => {
      setMessage("");
      setStatus("");
    }, 4000);
  };

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* About */}
        <div className="footer__section">
          <h3 className="footer__logo">Portfolio</h3>

          <p>
            Building modern, secure, and scalable web applications using
            Python, Django, Django REST Framework, React.js, MySQL, and REST
            APIs. Focused on writing clean code and delivering exceptional user
            experiences.
          </p>

          <div className="footer__socials">
            <a
              href="https://github.com/yashwantc779-sudo"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="mailto:your@email.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer__section">
          <h4>Quick Links</h4>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Skills */}
        <div className="footer__section">
          <h4>Core Technologies</h4>

          <ul>
            <li>Python</li>
            <li>Django & Django REST Framework</li>
            <li>React.js</li>
            <li>MySQL</li>
            <li>REST APIs</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__section">
          <h4>Newsletter</h4>

          <p>
            Subscribe to stay updated with my latest projects, technical
            articles, and development insights.
          </p>

          <form className="footer__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Subscribe</button>
          </form>

          {message && (
            <p className={`footer__message ${status}`}>
              {message}
            </p>
          )}
        </div>

      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Professional Portfolio. All Rights Reserved.
      </div>
    </footer>
  );
}