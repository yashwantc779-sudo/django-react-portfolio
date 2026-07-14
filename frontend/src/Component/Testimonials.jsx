import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const experiences = [
    {
      id: 1,
      title: "Python Development",
      description:
        "3+ years of experience developing applications using Python. Strong knowledge of Object-Oriented Programming (OOP), data structures, exception handling, file handling, modules, and writing clean, maintainable code.",
    },
    {
      id: 2,
      title: "Django & Django REST Framework",
      description:
        "3+ years of experience building scalable web applications and REST APIs using Django and Django REST Framework. Skilled in authentication, authorization, CRUD operations, JWT, API integration, and backend architecture.",
    },
    {
      id: 3,
      title: "Frontend Development",
      description:
        "Experience developing responsive and interactive web applications using React.js, JavaScript, HTML5, CSS3, and Bootstrap. Proficient in API integration, reusable components, and modern UI development.",
    },
    {
      id: 4,
      title: "Database & Development Tools",
      description:
        "Hands-on experience working with MySQL, SQLite, Git, GitHub, Postman, and VS Code. Skilled in database design, version control, API testing, debugging, and collaborative software development.",
    },
  ];

  return (
    <section className="testimonials" id="experience">
      <div className="container">
        <h2 className="testimonials__title">
          Technical Experience
        </h2>

        <p className="testimonials__subtitle">
          3+ years of experience developing modern, secure, and scalable
          full-stack web applications using Python and related technologies.
        </p>

        <div className="testimonials__cards">
          {experiences.map((exp) => (
            <div key={exp.id} className="testimonial__card fadeUpAnim">
              <div className="testimonial__quote">🚀</div>

              <h3 className="testimonial__name">{exp.title}</h3>

              <p className="testimonial__text">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}