import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Procraft</div>
      <nav>
        <a href="#about">Haqqımızda</a>
        <a href="#services">Servis</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Əlaqə</a>
        <a href="#order" className="order-btn">Sifariş et</a>
      </nav>
    </header>
  );
}

export default Header;
