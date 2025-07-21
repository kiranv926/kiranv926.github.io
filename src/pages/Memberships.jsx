import React from 'react';

const memberships = [
  {
    organization: 'TBD',
    role: '',
    since: 'TBD',
  }
];

const Memberships = () => (
  <div className="page memberships-page">
    <h1>Memberships & Affiliations</h1>
    <ul className="memberships-list">
      {memberships.map((m) => (
        <li key={m.organization} className="membership-item">
          <strong>{m.organization}</strong> {m.role} <span className="membership-since"></span>
        </li>
      ))}
    </ul>
  </div>
);

export default Memberships; 