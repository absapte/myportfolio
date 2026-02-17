import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Learning Management System",
      description:
        "A React-based frontend LMS with a modern, responsive UI for course browsing and user interaction.",
      image: project1,
      technologies: ["React", "Javascript", "Bootstrap", "CSS"],
      github: "https://github.com/absapte/Learning-Management-System",
      demo: "https://learning-management-system-chi-rouge.vercel.app/",
    },
    {
      id: 2,
      title: "Doctor Appointment",
      description:
        "Doctor Appointment Booking System – MERN Stack with JWT authentication and real-time appointment management.",
      image: project2,
      technologies: ["React", "Express", "Nodejs", "Tailwind", "MongoDB"],
      github: "https://github.com/absapte/AppointmentApp",
    },
  ];


  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-4">Featured Projects</h2>
        <p className="lead mb-5">
          Check out some of the projects I have worked on recently. Each project demonstrates different technologies and skills.
        </p>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="project-card shadow-sm rounded overflow-hidden position-relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />
                <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                  <h5 className="text-white fw-bold">{project.title}</h5>
                  <p className="text-light">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="badge bg-gradient me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-light btn-hover"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-light btn-hover"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
