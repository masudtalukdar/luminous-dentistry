import React from 'react';
import notFound from '../../Images/404.png';

const NotFound = () => {
  return (
    <div className='notfound-container'>
      <img src={notFound} alt='' />
    </div>
  );
};

export default NotFound;
