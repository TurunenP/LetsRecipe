import React, { useState } from 'react';
import Logo from '../../images/Recipe.PNG';
import './TopNav.css';

const TopNav = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo-image" />
      </div>
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Gallery</a>
      <a href="#about">Contact</a>
      <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default TopNav;
