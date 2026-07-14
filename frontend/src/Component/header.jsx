import React, { useEffect, useRef, useState } from "react";
import "./header.css";

export default function Header({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Navbar background
      setScrolled(currentScroll > 40);

      // At top always show
      if (currentScroll <= 20) {
        setShowNavbar(true);
        lastScrollY.current = currentScroll;
        return;
      }

      // Hide while scrolling down
      if (currentScroll > lastScrollY.current + 10) {
        setShowNavbar(false);
      }

      // Show only after scrolling UP around 80px
      if (currentScroll < lastScrollY.current - 80) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        showNavbar ? "show" : "hide"
      }`}
    >
      <div className="logo">YC</div>

      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li><button onClick={() => handleClick("home")}>Home</button></li>
        <li><button onClick={() => handleClick("about")}>About</button></li>
        <li><button onClick={() => handleClick("services")}>Skills</button></li>
        <li><button onClick={() => handleClick("testimonials")}>Experience</button></li>
        <li><button onClick={() => handleClick("contact")}>Contact</button></li>
      </ul>

      <button
        className="hire-btn"
        onClick={() => handleClick("contact")}
      >
        🚀 Hire Me
      </button>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}