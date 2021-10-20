import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams();

  const [services, setService] = useState([]);
  useEffect(() => {
    fetch(`/services.json`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  const currentService = services.filter(
    (service) => service.id === parseInt(id)
  );
  const serviceItem = currentService[0];
  console.log('More details', serviceItem);
  return (
    <div className=' service-details'>
      <p className='detail-heading p-5'>Services Details</p>
      <div className='details-container'>
        <div className='detail-info'>
          <h1 className='title text-primary'>
            {serviceItem?.moreDetailsTitle}
          </h1>
          <hr />
          <p>{serviceItem?.moreDetails}</p>
        </div>
        <div className='detail-img'>
          <img src={serviceItem?.img} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
