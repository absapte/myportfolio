import React from "react";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/feed/" },
    { name: "GitHub", icon: "fab fa-github", url: "https://github.com/absapte" },
    { name: "Email", icon: "fas fa-envelope", url: "https://mail.google.com/mail/u/0/#inbox" },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/absapte308" },
    { name: "Facebook", icon: "fab fa-facebook", url: "https://www.facebook.com/akshay.sapte.9699/" },
  ];

  return (
    <footer className="footer-section py-5 bg-light text-dark">
      <div className="container text-center">
        <h5 className="fw-bold mb-4">Connect with me</h5>
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title={social.name}
            >
              <i className={`${social.icon} fa-2x`}></i>
            </a>
          ))}
        </div>
        <p className="text-muted mb-0">
          &copy; 2026 Akshay Sapte. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
