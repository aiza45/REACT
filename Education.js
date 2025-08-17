import React from "react";

function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="skill-card">
        <h3>IST University | 2023-2027</h3>
        <p>
          Bachelor of Science in Computer Science
        </p>
        <p>
          Relevant coursework includes Data Structures, OOP, DBMS, Computer
          Networks, Artificial Intelligence, and Web Development.
        </p>
        <p>
          <strong>Academic Excellence:</strong> Consistently maintained A+
          grades throughout my academic career.
        </p>
      </div>

      <div className="skill-card" style={{ marginTop: "1.5rem" }}>
        <h3>Bahira College Anchorage | 2023</h3>
        <p>FSc Pre-Engineering</p>
        <p>Achieved A+ grades </p>
      </div>

      <div className="skill-card" style={{ marginTop: "1.5rem" }}>
        <h3>Matriculation | 2021</h3>
        <p>Achieved A+ grades</p>
      </div>
    </section>
  );
}

export default Education;
