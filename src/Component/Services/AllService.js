import React from 'react';
import './AllServices.css';
import ICON from '../../Images/ICON/time-logo.png';

const AllService = ({ service }) => {
  const { id, title, description, duration, img } = service;
  return (
    <div className='container'>
      <div className='service-card'>
        <div className='col-lg-9'>
          <div className='card-info'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <img className='time-icon' src={ICON} alt='' />
          <small>{duration}</small>
        </div>
        <div className='col-lg-3'>
          <img className='card-img' src={img} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AllService;
