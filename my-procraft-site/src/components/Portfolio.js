import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Tikinti işləri</h2>
      <p>Bizim komandamız sizin tikinti və təmir planlarınızı professional şəkildə həyata keçirmək üçün xidmətinizdədir</p>
      <div className="portfolio-images">
        <img src="home1.jpg" alt="House 1" />
        <img src="home2.jpg" alt="House 2" />
        <img src="home3.jpg" alt="House 3" />
        <img src="home4.jpg" alt="House 4" />
        <img src="home5.jpg" alt="House 5" />
      </div>
    </section>
  );
}

export default Portfolio;
