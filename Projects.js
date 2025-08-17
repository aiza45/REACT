import React from "react";

const projects = [
  {
    title: "KMEAN",
    img: "/kmean.jpg",
    desc: "Clustering techniques with K-Means, DBSCAN, and Hierarchical clustering. Evaluated using silhouette score, inertia, and dendrogram visualization.",
    link: "https://github.com/aiza45/kmean",
  },
  {
    title: "Text Summarizer",
    img: "/ts.png",
    desc: "Python-based NLP tool that condenses lengthy text into clear summaries using sentence extraction techniques.",
    link: "https://github.com/aiza45/Python-PROJECTS",
  },
  {
    title: "Random Forest Classification",
    img: "/breast.jpg",
    desc: "Compared ML models on breast cancer dataset. Random Forest achieved best performance with ROC analysis.",
    link: "https://github.com/aiza45/Machine-learning",
  },
  {
    title: "Classification",
    img: "/classification.jpg",
    desc: "Trained classifiers (Logistic Regression, Decision Tree, KNN, SVM, Random Forest) on Zoo dataset with visualizations.",
    link: "https://github.com/aiza45/Machine-learning/blob/main/Classification.ipynb",
  },
  {
    title: "Clusters",
    img: "/clusters.jpg",
    desc: "Applied clustering algorithms on UCI Energy dataset with scatter plots and dendrogram visualization.",
    link: "https://github.com/aiza45/Machine-learning/blob/main/ClusterAppliances.ipynb",
  },
  {
    title: "Student Management System",
    img: "/stu.jpg",
    desc: "Full-stack React + MongoDB app to manage student records. Includes authentication & CRUD features.",
    link: "https://github.com/aiza45/NewRepo/blob/master/Revival%20International%20school%20system.rar",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p>
        Developed full-stack projects demonstrating strong skills in front-end
        and back-end development.
      </p>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.img} alt={proj.title} />
            <div className="project-card-content">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
