import React from 'react';
import './Skills.css';
import { FaCode, FaServer, FaCogs, FaCloud, FaDatabase, FaTools, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const skills = [
  {
    icon: <FaCode />, title: 'Languages', items: ['Java', 'Python', 'Go', 'JavaScript'],
  },
  {
    icon: <FaServer />, title: 'Distributed Systems & Data Engineering', items: ['Kafka', 'Flink', 'Spark', 'Apache Iceberg', 'Redis', 'Kubernetes', 'Docker', 'Load Balancing', 'Concurrency', 'Fault Tolerance'],
  },
  {
    icon: <FaCogs />, title: 'API Design & Integration', items: ['RESTful Services', 'GraphQL API', 'Spring Boot', 'API Schema Governance'],
  },
  {
    icon: <FaCloud />, title: 'Cloud Platforms', items: ['AWS (EC2, S3, SQS, SNS, IAM)', 'Terraform (Basic)'],
  },
  {
    icon: <FaDatabase />, title: 'Databases', items: ['MongoDB', 'Oracle', 'Redis'],
  },
  {
    icon: <FaTools />, title: 'Monitoring & Tooling', items: ['Grafana', 'New Relic', 'Jenkins', 'JMeter', 'Git', 'Postman'],
  },
  {
    icon: <FaShieldAlt />, title: 'Security & Compliance', items: ['HIPAA', 'Data Encryption', 'Secure Deletion', 'Privacy Services'],
  },
  {
    icon: <FaLightbulb />, title: 'Foundational Skills', items: ['System Design', 'Data Structures & Algorithms', 'Observability', 'API Design', 'Cross-Team Collaboration'],
  },
];

const Skills = () => (
  <section className="skills-container">
    <h1>Technical Skills</h1>
    <div className="skills-grid">
      {skills.map((group) => (
        <div className="skill-card" key={group.title}>
          <h2 className="skill-card-title">{group.icon} <span>{group.title}</span></h2>
          <div className="badges">
            {group.items.map((item) => (
              <span className="badge" key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
