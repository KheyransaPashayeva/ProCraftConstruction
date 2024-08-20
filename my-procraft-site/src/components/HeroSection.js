import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Procraft ilə məkanınızı yeniləyin!</h1>
        <p>Bizim mütəxəssislərimiz ehtiyaclarınıza uyğun mükəmməl layihə yaratmağınıza kömək göstərəcək</p>
        <a href="#order" className="order-button">Sifariş et</a>
      </div>
    </section>
  );
}

export default HeroSection;
