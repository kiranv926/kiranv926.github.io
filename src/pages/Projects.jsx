// Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="page projects-page">
      <h1>Projects</h1>

      {/* Adobe Commerce Search & Recommendations */}
      <section className="project">
        <h2>Adobe Commerce Search & Recommendations</h2>
        <p>
          Architected and optimized distributed search and recommendation systems
          serving millions of queries daily across multiple tenants.
        </p>
        <p><strong>Tech stack:</strong> Java, Spring Boot, Elasticsearch, Kafka, Kubernetes, AWS</p>
        <p><strong>Challenges:</strong> Achieving ultra-low latency search responses, multi-tenant data isolation, and real-time personalization.</p>
        <p><strong>Impact:</strong> Increased search throughput by 35% while improving relevance and user experience across Adobe Commerce sites.</p>
      </section>

      {/* Batch Processing Pipeline for Historic Order Events */}
      <section className="project">
        <h2>Batch Processing Pipeline for Adobe Experience Platform</h2>
        <p>
          Designed scalable Spark and Kafka pipelines to ingest historic order data for exabyte-scale analytics and personalization.
        </p>
        <p><strong>Tech stack:</strong> Apache Spark, Kafka, Java, AWS S3, Schema Registry</p>
        <p><strong>Challenges:</strong> Handling massive data volumes with fault tolerance and schema evolution.</p>
        <p><strong>Impact:</strong> Enabled data-driven marketing strategies with improved personalization accuracy.</p>
      </section>

      {/* Secure Microservices for Transaction Processing */}
      <section className="project">
        <h2>Secure Transaction Microservices</h2>
        <p>
          Implemented secure, HIPAA-compliant Java microservices with Spring Boot and Kubernetes to improve transaction throughput and compliance.
        </p>
        <p><strong>Tech stack:</strong> Java, Spring Boot, Kubernetes, Docker, AWS, HIPAA Security</p>
        <p><strong>Challenges:</strong> Ensuring data privacy, encryption, and seamless scaling in a regulated environment.</p>
        <p><strong>Impact:</strong> Improved throughput by 30% and ensured compliance with HIPAA and data privacy regulations.</p>
      </section>

      {/* High-Throughput Healthcare Transaction System */}
      <section className="project">
        <h2>Healthcare Transaction Publish-Subscribe System</h2>
        <p>
          Built a real-time, fault-tolerant publish-subscribe messaging system processing billions of healthcare transactions daily.
        </p>
        <p><strong>Tech stack:</strong> Java, Spring Boot, Kafka, IBM MQ, Docker</p>
        <p><strong>Challenges:</strong> Achieving low latency, high availability across data centers, and HIPAA compliance.</p>
        <p><strong>Impact:</strong> Supported critical clinical workflows with robust message delivery and monitoring.</p>
      </section>

      {/* ePayment System for Healthcare */}
      <section className="project">
        <h2>ePayment Processing System</h2>
        <p>
          Developed a secure ePayment gateway integrated with credit card processing, supporting HIPAA and PCI compliance for healthcare billing.
        </p>
        <p><strong>Tech stack:</strong> Java, Spring Boot, PCI DSS, HIPAA, REST APIs, Secure Encryption</p>
        <p><strong>Challenges:</strong> Ensuring secure transaction processing, encryption, and fraud prevention under strict regulatory requirements.</p>
        <p><strong>Impact:</strong> Streamlined billing operations and enhanced patient payment experience with secure, real-time transactions.</p>
      </section>

      {/* Medical Necessity Verification Pipeline */}
      <section className="project">
        <h2>Medical Necessity Verification Pipeline</h2>
        <p>
          Architected distributed microservices and Kafka streams for medical claims verification, improving accuracy and processing speed.
        </p>
        <p><strong>Tech stack:</strong> Java, Kafka, Microservices, Docker, MongoDB</p>
        <p><strong>Challenges:</strong> Integrating complex clinical rules and handling high-throughput validation workloads.</p>
        <p><strong>Impact:</strong> Reduced claim rejections and sped up medical claims processing workflows.</p>
      </section>

    </div>
  );
};

export default Projects;
