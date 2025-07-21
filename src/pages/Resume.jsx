import React from 'react';
import profilePic from '../assets/profile-pic.png';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserTie, FaBriefcase, FaTools, FaGraduationCap, FaBook, FaKey, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import './Resume.css';

const experience = [
  {
    title: 'Senior Software Development Engineer',
    company: 'Adobe Corporation',
    location: 'Austin, TX',
    period: 'March 2022 – Present',
    bullets: [
      'Built scalable data pipelines using Spark and Kafka, enabling ingestion of 10M+ records/day into Adobe Experience Platform for analytics, experimentation, and personalization.',
      'Architected real-time personalization data flows using Kafka, Redis, and Spring Boot microservices, integrating Adobe Commerce identity data with AEP in near real-time.',
      'Designed fault-tolerant Java/Kubernetes services with load balancing and retry mechanisms to achieve 99.99% uptime in high-traffic production environments.',
      'Implemented a Schema Registry and contract validation framework to enforce versioned data standards, ensuring compliance with Adobe’s internal schema governance and compatibility across systems.',
      'Developed HIPAA-compliant services, integrating encrypted data handling, secure deletion, and privacy policy enforcement across APIs and data stores.',
      'Automated end-to-end CI/CD pipelines with Jenkins and Docker, reducing deployment time by 50% and improving release confidence.',
      'Partnered with product, platform, and data teams to deliver cross-functional platform components powering Adobe’s customer data infrastructure.',
      'Built distributed catalog feed services using Spring Boot and Redis, improving ingestion performance by 40% across Adobe Commerce tenants.',
      'Optimized service performance by integrating Caffeine and Redis for multi-tenant caching, reducing P95 latency by 25%.',
      'Automated infrastructure provisioning and deployments, enabling rapid feature rollouts and minimizing manual overhead.',
      'Instrumented systems using Grafana and New Relic, identifying bottlenecks proactively and reducing production downtime by 30%.'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'Cerner Corporation',
    location: 'Kansas City, MO',
    period: 'Jan 2014 – Mar 2022',
    bullets: [
      'Built and maintained a distributed pub-sub system (Java + Spring Boot) processing billions of real-time healthcare transactions daily using IBM MQ and internal messaging layers.',
      'Migrated critical systems from Oracle to MongoDB, reducing query times by 60% and enabling seamless scale-out under peak loads.',
      'Containerized legacy applications with Docker and integrated them into an HA messaging framework, improving delivery reliability across data centers.',
      'Developed schema-driven services to enable safe, versioned communication between internal finance and claims applications.',
      'Delivered reusable Java libraries and scalable APIs consumed across the enterprise, accelerating service development and reducing redundancy.',
      'Identified and resolved thread contention, garbage collection, and memory issues in production JVMs, improving performance and stability.',
      'Built secure, real-time online credit authorization APIs, ensuring high-throughput and compliance for sensitive financial data workflows.',
      'Hardened REST services using Fortify, ESAPI, and static code analysis tools to meet compliance and security review benchmarks.'
    ]
  }
];

const skills = [
  { label: 'Languages', value: 'Java (Expert), Python, Go (Working Knowledge)' },
  { label: 'Distributed Systems', value: 'Kafka, Flink, Spark, Iceberg, Redis, IBM MQ' },
  { label: 'Cloud & Containers', value: 'AWS (SQS, SNS, EC2, S3), Docker, Kubernetes' },
  { label: 'Microservices & Frameworks', value: 'Spring Boot, REST APIs, Caffeine, Redis' },
  { label: 'Observability & Tooling', value: 'Grafana, New Relic, Jenkins, JMeter, Postman' },
  { label: 'Data & Storage', value: 'Oracle, MongoDB, Redis, S3' },
  { label: 'Security & Governance', value: 'HIPAA, Data Encryption, Secure Deletion, Privacy Services' },
  { label: 'Core Concepts', value: 'System Design, Scalability, Fault Tolerance, CI/CD, Schema Management' }
];

const publications = [
  { title: 'Technology to augment thread scheduling with temporal characteristics', date: '03/25/2022', link: '#' },
  { title: 'Optimizing BERT model for Intel CPU Cores using ONNX runtime', date: '02/10/2022', link: '#' },
  { title: 'A Comprehensive Evaluation of New AI Accelerators for Deep Learning Workloads', date: '01/15/2022', link: '#' },
];

const socialLinks = [
  { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/kirankumarvuyyuru/', value: 'linkedin.com/in/kirankumarvuyyuru/' },
  { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/kiranv926', value: 'github.com/kiranv926' },
  { icon: <FaEnvelope />, label: 'Email', url: 'mailto:vuyyuru.kirankumar@gmail.com', value: 'vuyyuru.kirankumar@gmail.com' },
  { icon: <FaMedium />, label: 'Medium', url: 'https://medium.com/@kiranv926', value: 'medium.com/@kiranv926' },
];

const Resume = () => (
  <div className="resume3-container">
    <div className="resume3-header-row-screenshot-wrapper">
      <div className="resume3-header-row-screenshot">
        <div className="resume3-header-photo-block">
          <img src={profilePic} alt="Profile" className="resume3-profile-pic screenshot" />
        </div>
        <div className="resume3-header-info-block">
          <h1>KIRAN KUMAR VUYYURU</h1>
          <div className="resume3-title">Senior Software Development Engineer, Austin TX</div>
          <div className="resume3-summary screenshot">
            Distributed Systems Engineer with over 12 years of experience designing and operating fault-tolerant, cloud-native infrastructure and data platforms. Proven expertise in building scalable batch and real-time systems using Java, Python, Spark, Flink, Kafka, and Kubernetes. Led high-impact initiatives at Adobe and Cerner involving streaming data ingestion, customer personalization, secure data compliance, and system performance at scale.
          </div>
        </div>
      </div>
    </div>
    <div className="resume3-header-social-bar two-rows">
      <div className="social-bar-inner">
        <div className="social-row">
          {socialLinks.slice(0, 2).map(link => (
            <a href={link.url} key={link.label} className="resume3-social-link screenshot" target="_blank" rel="noopener noreferrer">
              {link.icon} <span className="social-label">{link.label}:</span> <span className="social-value">{link.value}</span>
            </a>
          ))}
        </div>
        <div className="social-row">
          {socialLinks.slice(2, 4).map(link => (
            <a href={link.url} key={link.label} className="resume3-social-link screenshot" target="_blank" rel="noopener noreferrer">
              {link.icon} <span className="social-label">{link.label}:</span> <span className="social-value">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="resume3-main-grid">
      <div className="resume3-main-left">
        <section className="resume3-section">
          <h2><FaBriefcase /> Work Experience</h2>
          {experience.map((exp) => (
            <div className="resume3-job" key={exp.title + exp.company}>
              <div className="resume3-job-title"><strong>{exp.title}</strong>, {exp.company}</div>
              <div className="resume3-job-meta">{exp.period} | {exp.location}</div>
              <ul className="resume3-job-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>
        <section className="resume3-section">
          <h2><FaKey /> Key Accomplishments</h2>
          <ul className="resume3-accomplishments">
            <li>Built and maintained distributed pub-sub systems processing billions of healthcare transactions daily.</li>
            <li>Architected real-time personalization flows for Adobe Commerce using Kafka, Redis, and Spring Boot.</li>
            <li>Developed HIPAA-compliant services and automated CI/CD pipelines for secure, rapid deployments.</li>
            <li>Optimized service performance and reliability with advanced caching, monitoring, and schema governance.</li>
          </ul>
        </section>
      </div>
      <div className="resume3-main-right">
        <section className="resume3-section">
          <h2><FaTools /> Technical Skills</h2>
          <ul className="resume3-skills-list">
            {skills.map((s) => (
              <li key={s.label}><strong>{s.label}:</strong> {s.value}</li>
            ))}
          </ul>
        </section>
        <section className="resume3-section">
          <h2><FaGraduationCap /> Education</h2>
          <ul>
            <li>
              <strong>M.S. in Computer Science</strong>, University of Missouri-Kansas City, Kansas City, MO (2011–2013)
            </li>
            <li><strong>B.Tech in Information Technology Science</strong>, ANU University (2007–2011)</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default Resume;
