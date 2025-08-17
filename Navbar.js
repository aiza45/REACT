import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AN</div>
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
