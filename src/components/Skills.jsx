import React from "react";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <FaCode />,
      skills: ["React", "HTML", "CSS3", "Bootstrap", "JavaScript"],
    },
    {
      category: "Backend",
      icon: <FaServer />,
      skills: ["Node.js", "Express"],
    },
    {
      category: "Database",
      icon: <FaDatabase />,
      skills: ["MongoDB"],
    },
    {
      category: "Tools",
      icon: <FaTools />,
      skills: ["Git", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-4">Skills & Expertise</h2>
        <p className="lead mb-5">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="row">
          {skills.map((s, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 mb-4">
              <div className="skill-card p-4 rounded shadow-sm h-100">
                <div className="skill-header mb-3">
                  <div className="skill-icon mb-2 fs-3">{s.icon}</div>
                  <h5 className="fw-bold">{s.category}</h5>
                </div>

                <ul className="list-unstyled mt-3">
                  {s.skills.map((skill, i) => (
                    <li key={i} className="mb-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
