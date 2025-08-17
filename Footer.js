import React from "react";

function Footer() {
  return (
    <section id="contact" className="section">
      <footer>
        <div className="social-links" style={{ marginBottom: "10px" }}>
          <a
            href="https://github.com/aiza45"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aiza-najam-7a1a282a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="mailto:aiza31419@gmail.com">
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>
        <p>&copy; 2025 Ayeza. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Footer;
