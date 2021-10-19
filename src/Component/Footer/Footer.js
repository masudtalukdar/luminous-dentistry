import React from 'react';
import './Footer.css';
import logo from '../../Images/logo/lum-logo1.png';

const Footer = () => {
  return (
    <footer className='row'>
      <article className='col-lg-6'>
        <img width='200' src={logo} alt='logo' />
      </article>

      <article className='col-lg-6'>
        <article className='row'>
          <aside className=' d-flex justify-content-center gap-3 mt-5'>
            <p>Get help</p>
            <p>Read FAQs</p>
            <p>View all clinics</p>
          </aside>
          <aside className='d-flex justify-content-center gap-5 mt-5'>
            <p>Private Policy</p>
            <p>Terms of use</p>
            <p>Cookies</p>
          </aside>
        </article>
      </article>
      <p className='text-white text-center m-0 pt-5'>
        © 2021 Luminous Dentistry. All Rights Reserved. | Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
