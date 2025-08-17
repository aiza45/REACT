import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="profile-wrapper">
          <img
            src="/pop.jpg"
            alt="Ayeza Profile"
            className="profile-pic"
            onError={(e) => {
              e.target.style.border = "2px solid red";
              console.warn("Profile image failed to load:", e.target.src);
            }}
          />
        </div>
        <div className="hero-text">
          <h1>Hi, I’m Ayeza</h1>
          <p>
            A Computer Science student passionate about building clean,
            user-focused digital experiences.
          </p>
          <p>Aspiring full-stack developer | React, Python, JavaScript</p>
          <p>
            Eager to contribute to real-world projects and collaborate within
            dynamic development teams.
          </p>
          <div>
            <a href="#projects" className="cta-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
