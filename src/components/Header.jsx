import React from "react";


const Header = () => {
  return (
    <header className="hero-section d-flex align-items-center justify-content-center text-center position-relative">
      <div className="container position-relative z-2">
        <h1 className="display-1 fw-bold text-gradient mb-3">
          Akshay Sapte
        </h1>
        <p className="lead fs-3 mb-4 text-secondary">
          Full Stack Developer
        </p>
        <p className="mb-5 fs-5 text-muted mx-auto" style={{ maxWidth: "700px", lineHeight: "1.7" }}>
          Passionate about creating <span className="text-primary fw-bold">innovative web solutions</span> 
          and bringing ideas to life through code. I specialize in <span className="text-success fw-bold">modern technologies</span> and clean development practices.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          <a href="/src/pdf/Akshay Sapte Resume Updated.pdf" download className="btn btn-lg btn-gradient px-5 py-3">
            Download Resume
          </a>
          <a href="#contact" className="btn btn-lg btn-outline-gradient px-5 py-3">
            Contact Me
          </a>
        </div>
        <div className="social-icons d-flex justify-content-center gap-4">
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x text-primary"></i>
          </a>
          <a href="https://github.com/absapte" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x text-dark"></i>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <i className="fas fa-envelope fa-2x text-danger"></i>
          </a>
        </div>
      </div>

      {/* Animated floating circles */}
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      <div className="floating-circle circle-3"></div>
      <div className="floating-circle circle-4"></div>
    </header>
  );
};

export default Header;
