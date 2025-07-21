import React from 'react';

const researchProjects = [
  {
    title: 'TBD'
  }
];

const Research = () => (
  <div className="page research-page">
    <h1>Research</h1>
    <section className="research-interests">
      <h2>Research Interests</h2>
      <ul>
        <li>Distributed Systems & Data Engineering</li>
        <li>Cloud-Native Architectures</li>
        <li>Healthcare Data Privacy & Security</li>
        <li>Real-Time Analytics</li>
        <li>Open Source Software</li>
      </ul>
    </section>
    <section className="research-projects">
      <h2>Selected Publications & Projects</h2>
      <ul>
        {researchProjects.map((proj) => (
          <li key={proj.title} className="research-item">
            <strong>{proj.title}</strong> <span className="research-year">({proj.year})</span>
            <div className="research-desc">{proj.description}</div>
            {proj.link && <a href={proj.link} className="research-link">Read More</a>}
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Research; 