import React, { useEffect, useState } from 'react';
import AllService from './AllService';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //   console.log('data', services);

  return (
    <div>
      <section className='service-container'>
        {services.map((service) => (
          <AllService service={service}></AllService>
        ))}
      </section>
    </div>
  );
};

export default Services;
