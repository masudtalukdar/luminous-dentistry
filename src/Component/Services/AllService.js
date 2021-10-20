import React from 'react';
import './AllServices.css';
import ICON from '../../Images/ICON/time-logo.png';
import { Link } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';

const AllService = ({ service }) => {
  const { title, description, duration, img } = service;
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
          <Link to={`/services/${service.id}`}>
            <button type='button' className='btn btn-danger text-white'>
              Learn More
            </button>
          </Link>
        </div>
        <div className='col-lg-3'>
          <img className='card-img' src={img} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AllService;
