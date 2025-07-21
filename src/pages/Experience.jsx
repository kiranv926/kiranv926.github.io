import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-container">
      <h1>Professional Experience</h1>

      <article className="job">
        <h2>Senior Software Engineer, Adobe Corporation</h2>
        <p className="date">July 2024 – Present</p>
        <ul>
          <li>
            Architected and optimized distributed search and recommendation systems serving
            millions of daily queries across multi-tenant Adobe Commerce.
          </li>
          <li>
            Designed scalable batch and streaming data pipelines using Spark and Kafka to
            ingest historic order events into Adobe Experience Platform for exabyte-scale
            personalization and analytics.
          </li>
          <li>
            Developed secure microservices using Java, Spring Boot, and Kubernetes;
            improved transaction processing throughput by 30%.
          </li>
          <li>
            Integrated Adobe Commerce customer profiles with AEP identity graph via
            GraphQL APIs enabling real-time personalization across marketing channels.
          </li>
          <li>
            Led HIPAA-compliant initiatives, including data encryption, privacy enforcement,
            and secure deletion pipelines.
          </li>
          <li>
            Designed resilient event-driven data delivery systems using AWS SQS/SNS and
            schema-driven contracts for fault-tolerant processing.
          </li>
          <li>
            Provided technical leadership and cross-team collaboration to align scalable
            data solutions with business outcomes.
          </li>
          <li>
            Built distributed microservices for Adobe Commerce catalog feed ingestion,
            increasing throughput by 40%.
          </li>
          <li>
            Improved service latency by integrating Caffeine and Redis distributed caching
            in multi-tenant environments.
          </li>
          <li>
            Automated CI/CD pipelines using Jenkins and Docker, reducing release cycles by 50%.
          </li>
          <li>
            Implemented observability with Grafana and New Relic, reducing production
            incidents by 30%.
          </li>
        </ul>
      </article>

      <article className="job">
        <h2>Senior Software Engineer, Cerner Corporation</h2>
        <p className="date">Jan 2014 – Mar 2022</p>
        <ul>
          <li>
            Built cloud-native transaction processing services handling billions of
            real-time healthcare events daily.
          </li>
          <li>
            Led migration from Oracle to MongoDB, including automation, failover testing,
            and system monitoring.
          </li>
          <li>
            Developed GraphQL APIs to provide flexible, efficient data access reducing
            client overfetching.
          </li>
          <li>
            Integrated IBM MQ and Dockerized Spring services for low-latency, highly
            available messaging across data centers.
          </li>
          <li>
            Mentored junior engineers, drove Agile ceremonies, and led architecture
            design reviews.
          </li>
          <li>
            Diagnosed JVM memory leaks, thread contention, and optimized SQL queries to
            improve application stability.
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Experience;
