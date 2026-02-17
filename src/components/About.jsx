import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-4 fw-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="lead mb-4">
              Hello! I'm <strong>Akshay Sapte</strong>, a <span className="fw-bold text-primary">full-stack developer</span> passionate about building modern web applications.
              I love turning <span className="fw-bold text-success">complex problems</span> into <span className="fw-bold text-warning">simple, elegant solutions</span>.
            </p>
            <p className="mb-4">
              I enjoy working with <span className="badge bg-primary me-1 mb-1">React</span>
              <span className="badge bg-success me-1 mb-1">Node.js</span>
              <span className="badge bg-warning text-dark me-1 mb-1">Bootstrap</span>
              <span className="badge bg-info text-dark me-1 mb-1">MongoDB</span>
              and other modern technologies to create responsive and user-friendly web apps.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body text-center">
                <i className="fas fa-project-diagram fa-3x text-primary mb-3"></i>
                <h5 className="card-title fw-bold mb-2">Projects</h5>
                <p className="card-text">Worked on <strong>5+ personal and learning projects</strong> exploring modern web technologies.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body text-center">
                <i className="fas fa-lightbulb fa-3x text-success mb-3"></i>
                <h5 className="card-title fw-bold mb-2">Problem Solving</h5>
                <p className="card-text">Enjoy solving challenging problems and learning new technologies to enhance my skills.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body text-center">
                <i className="fas fa-users fa-3x text-warning mb-3"></i>
                <h5 className="card-title fw-bold mb-2">Collaboration</h5>
                <p className="card-text">Eager to work in teams, collaborate on projects, and contribute to open-source initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
