import React from 'react';
import './Banner.css';
import headerVideo from './video/video.mp4';
import { FaPhoneAlt } from 'react-icons/fa';

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <div className='bgvideo'>
          <div className='banner-message'>
            <h1>Get the Smile You've Always Wanted</h1>
            {/* <a href='https://fb.me/luminousdentistry7'>
              GET A FREE CONSULTATION
            </a>
            <a href='https://m.me/luminousdentistry7'>sena a message</a> */}
            <button className='btn btn-outline-danger text-white mt-3'>
              GET A FREE CONSULTATION
            </button>
            <span>
              <FaPhoneAlt /> +86155895200
            </span>
          </div>
          <video className='mini-display' autoPlay loop muted>
            <source src={headerVideo} type='video/mp4' />
          </video>
        </div>
      </div>
    </>
  );
};

export default Banner;
