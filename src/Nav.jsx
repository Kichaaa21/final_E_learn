import React from 'react';
import './nav.css';

const NavBar = () => {
  return (
    
    <nav className="navbar" >
      <img width="50" height="50" src="https://img.icons8.com/bubbles/50/learning.png" alt="learning"/>      
      <div className="navbar__logo">E-LEARN</div>
      <ul className="navbar__links">
        <li>
            
        </li>
        <li className="navbar__item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar__item">
          <a href="#courses">Courses</a>
        </li>
        <li className="navbar__item">
          <a href="#about">About</a>
        </li>
        <li className="navbar__item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
