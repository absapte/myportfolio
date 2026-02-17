import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:absapte308@gmail.com?subject=Portfolio Contact from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #fafafa 0%, #eef6ff 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h2 className="display-4 fw-bold text-center mb-5 text-dark">
          Contact Me
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              className="p-5 rounded shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn w-100 fw-bold"
                style={{
                  background: "linear-gradient(135deg, #c9e4ff, #e6f2ff)",
                  border: "none",
                  color: "#333",
                }}
              >
                Send Message
              </button>
            </form>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
