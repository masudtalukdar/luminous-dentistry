import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from '../../Images/logo/lum-logo.png';

const NavMenu = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg  navbar-dark bg-dark'>
        <div className='container-fluid wrap'>
          <img className='logo' src={logo} alt='logo' />
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div
            class='collapse navbar-collapse nav-items'
            id='navbarNavAltMarkup'
          >
            <div class='navbar-nav'>
              <a href=''>HOME</a>
              <a href=''>ABOUT US</a>
              <a href=''>SERVICES</a>
              <a href=''>EMERGENCY DENTIST</a>
              <a href=''>OUR WORK</a>
              <a href=''>Login</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
