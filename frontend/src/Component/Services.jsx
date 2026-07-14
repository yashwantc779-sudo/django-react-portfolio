import React from "react";
import "./Services.css";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiDjango, SiMysql } from "react-icons/si";

const skillsData = [
  {
    id: 1,
    icon: FaPython,
    title: "Python",
    description:
      "Strong knowledge of Python programming including OOP, Functions, Exception Handling, File Handling, Modules, and Data Structures.",
  },
  {
    id: 2,
    icon: SiDjango,
    title: "Django & Django REST Framework",
    description:
      "Develop secure and scalable web applications, REST APIs, Authentication, CRUD Operations, JWT Authentication, and API Integration.",
  },
  {
    id: 3,
    icon: FaReact,
    title: "React.js",
    description:
      "Build responsive and interactive user interfaces using React.js, JavaScript, Hooks, Components, and API Integration.",
  },
  {
    id: 4,
    icon: SiMysql,
    title: "MySQL & SQLite",
    description:
      "Design relational databases, write SQL queries, manage database relationships, and optimize application performance.",
  },
  {
    id: 5,
    icon: FaGitAlt,
    title: "Git & GitHub",
    description:
      "Version control using Git, GitHub, branch management, collaboration, and project deployment workflows.",
  },
  {
    id: 6,
    icon: FaHtml5,
    title: "HTML, CSS & Bootstrap",
    description:
      "Create responsive and attractive web pages using HTML5, CSS3, Bootstrap, and modern UI design principles.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="skills">
      <h2>My Technical Skills</h2>

      <p>
        My expertise in Python Full Stack Development, including backend,
        frontend, databases, and development tools.
      </p>

      <div className="services-cards">
        {skillsData.map((skill) => {
          const Icon = skill.icon;

          return (
            <div className="service-card" key={skill.id}>
              <div className="icon">
                <Icon />
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}