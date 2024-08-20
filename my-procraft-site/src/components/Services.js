import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>We Provide Services</h2>
      <p>We help bring your projects to life with attention to every detail!</p>
      <div className="services-list">
        <div className="service-item">
          <h3>Engineering</h3>
          <p>We deliver your project with precision and care.</p>
        </div>
        <div className="service-item">
          <h3>Maintenance</h3>
          <p>Ensure seamless operations with our comprehensive maintenance services.</p>
        </div>
        <div className="service-item">
          <h3>Construction</h3>
          <p>Enhance efficiency and manageability of your project.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
