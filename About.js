import React from "react";

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-card">
          <p>
            <strong>Background:</strong> Dedicated and passionate computer
            science student with strong academic and practical experience.
          </p>
          <p>
            <strong>Languages:</strong> Proficient in English & Urdu.
          </p>
          <p>
            <strong>Key Strengths:</strong> Time management, problem-solving,
            analytical skills.
          </p>
          <p>
            <strong>Personality:</strong> Curious, adaptable, growth-oriented,
            effective communicator, and team player.
          </p>
        </div>
        <div className="about-card">
          <p>
            <strong>Interests:</strong> Developing scalable web applications,
            learning new technologies, and collaborating on impactful projects.
          </p>
          <p>
            <strong>Goals:</strong> To become a skilled full-stack developer and
            contribute to innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
