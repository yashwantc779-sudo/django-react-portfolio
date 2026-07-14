import { useEffect } from "react";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./footer";
import Header from "./header";
import "./Home.css";


export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const hero = document.querySelector(".home-hero-content");

    if (hero) hero.classList.add("visible");

    const sections = document.querySelectorAll(".home-fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header scrollToSection={scrollToSection} />

      <section className="home-hero-container" id="home">

        {/* Left Side */}

        <div className="home-hero-content">

          <span>Python Full Stack Developer</span>

          <h1>
            Hi, I'm
            <br />
            <span className="home-highlight">
              Yashwant
            </span>
          </h1>

          <h2 className="developer-role">
            Python Full Stack Developer
          </h2>

          <p>
            Passionate Python Full Stack Developer specializing in
            Django, Django REST Framework, React.js, JavaScript,
            MySQL and REST APIs. I enjoy building modern,
            responsive and scalable web applications.
          </p>

          <div className="home-buttons">
            <button
              className="home-btn primary"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me 🚀
            </button>

            <button
              className="home-btn outline"
              onClick={() => scrollToSection("services")}
            >
              My Skills
            </button>
          </div>

        </div>

        {/* Right Side */}

        <div className="home-hero-image">

          <img
            src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
            alt="Python Developer"
          />

        </div>

      </section>

      <div id="about" className="home-section home-fade-in">
        <About />
      </div>

      <div id="services" className="home-section home-fade-in">
        <Services />
      </div>

      <div id="testimonials" className="home-section home-fade-in">
        <Testimonials />
      </div>

      <div id="contact" className="home-section home-fade-in">
        <Contact />
      </div>

      <Footer />
    </>
  );
}