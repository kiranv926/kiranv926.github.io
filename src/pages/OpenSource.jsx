import React from 'react';

const openSourceProjects = [
  {
    name: 'TBD',
    description: '',
    link: '',
  }
];

const OpenSource = () => (
  <div className="page open-source-page">
    <h1>Open Source Contributions</h1>
    <ul className="open-source-list">
      {openSourceProjects.map((proj) => (
        <li key={proj.name} className="open-source-item">
          <strong>{proj.name}</strong> {proj.description}
          {proj.link && (
            <span> [<a href={proj.link} target="_blank" rel="noopener noreferrer">GitHub</a>]</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default OpenSource; 