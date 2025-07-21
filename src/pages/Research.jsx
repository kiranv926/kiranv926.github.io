import React from 'react';

const researchProjects = [
  {
    title: 'Scalable Data Pipelines for Healthcare Analytics',
    year: 2023,
    description: 'Designed and implemented scalable, HIPAA-compliant data pipelines for real-time healthcare analytics using Apache Kafka and Spark.',
    link: '#',
  },
  {
    title: 'Fault-Tolerant Microservices in Cloud Environments',
    year: 2022,
    description: 'Explored patterns and best practices for building resilient microservices architectures on Kubernetes and AWS.',
    link: '#',
  },
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