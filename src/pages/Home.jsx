import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <div className="intro">
        <h1>Hello, I'm Kiran Kumar Vuyyuru</h1>
        <p className="tagline">
          Sr Software development Engineer | Cloud-Native Microservices & Data Platform Specialist
        </p>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I am a seasoned software engineer with over 12 years of experience architecting and operating
          large-scale distributed systems. I specialize in building fault-tolerant, high-throughput
          data platforms and cloud-native microservices using Java, Python, and Go.
        </p>
        <p>
          My expertise spans designing HIPAA-compliant pipelines for healthcare and personalization
          domains, optimizing real-time and batch processing systems with Kafka, Spark, and Flink,
          and leading initiatives that align technical solutions with strategic business goals.
        </p>
      </div>

      <div className="what-i-do">
        <h2>What I Do</h2>
        <ul>
            <li>Design & optimize distributed data pipelines (Kafka, Spark, Flink)</li>
            <li>Develop resilient cloud-native microservices using Java & Spring Boot</li>
            <li>Build and consume modern APIs with REST and GraphQL for efficient client-server communication</li>
            <li>Implement secure, compliant architectures for sensitive data domains (HIPAA)</li>
            <li>Lead cross-functional teams to drive scalable, business-aligned technology solutions</li>
            <li>Build developer tooling & internal platforms to accelerate productivity at scale</li>
            <li>Integrate ML-ready data platforms for personalization and analytics</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
