import React from 'react';
import './Work.css';
import img1 from '../../Images/interior-hero.jpg';
import img2 from '../../Images/amy-square.jpg';

const Work = () => {
  return (
    <>
      <div className='work-container'>
        <div
          className='work-heading col-lg-9
        p-5'
        >
          <h6 className='title'> YOU WILL LOVE YOUR SMILE</h6>
          <p className='work-info p-3'>
            See Why Our Patients Love Us Our patients
          </p>
          <small>love their new beautiful smiles and you will too.</small>
        </div>
      </div>
      <section className='section-container d-flex '>
        <div className='section-info col-lg-5'>
          <small className='sec-left'>SEE THE DIFFERENCE</small>
          <h1 className='title'>Before and After</h1>
          <small className='  sec-left'>
            See what we could do for your smile.
          </small>
        </div>
        <div className='section-img col-lg-7'>
          <img src={img1} alt='' />
        </div>
      </section>
      <section className='section-container d-flex mt-5'>
        <div className='section-img col-lg-7'>
          <img src={img2} alt='' />
        </div>
        <div className='section-info col-lg-5'>
          <small className='sec-left'> DON'T TAKE OUR WORD FOR IT</small>
          <h1 className='title'>Patient Testimonials</h1>
          <small className='sec-left'>
            See what our patients say about their experience with us.
          </small>
        </div>
      </section>
    </>
  );
};

export default Work;
