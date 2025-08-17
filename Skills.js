import React from "react";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills & Qualifications</h2>
      <div className="about-content">
        <div className="skill-card">
          <h3>Technical Skills</h3>
          <ul>
            <li>Programming Languages: HTML, CSS, JavaScript, Python, C++</li>
            <li>Frameworks & Libraries: React.js</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>
              Concepts: Data Structures & Algorithms (DSA), Object-Oriented
              Programming (OOP), Database Management Systems (DBMS), Computer
              Networks, Artificial Intelligence (AI)
            </li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Time Management</li>
            <li>Critical Thinking</li>
            <li>Communication</li>
            <li>Collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
