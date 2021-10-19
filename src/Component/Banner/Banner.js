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
            <button className='btn btn-danger mt-3'>
              GET A FREE CONSULTATION
            </button>
            <span>
              <FaPhoneAlt /> 15589528030
            </span>
          </div>
          <video autoPlay loop muted>
            <source src={headerVideo} type='video/mp4' />
          </video>
        </div>
      </div>
    </>
  );
};

export default Banner;
