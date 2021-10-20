import React from 'react';
import './About.css';
import tooth from '../../Images/ICON/tooth.png';
import family from '../../Images/ICON/family.png';
import braces from '../../Images/ICON/braces.png';

const About = () => {
  return (
    <>
      <div className='about-container p-5'>
        <div className='about-title'>
          <h2 className='align-item-center'>what makes us different?</h2>
          <h5 className='align-item-center'>
            Luminous Dentistry is the world’s leading functional dental
            practices. We strive to address the root cause of dental disease
            instead of simply filling and drilling teeth. Our aim is airway
            focused, no-braces, and metal-free cosmetic dentistry to provide you
            with the best smile possible.
          </h5>
          <div className='service-container ' id='container'>
            <div className=' col-md-4 col-sm-6'>
              <div className='serviceBox'>
                <div className='service-icon'>
                  <img className='service-icon' src={tooth} alt='' />
                </div>
                <h3 className='title'>Functional Dentistry</h3>
                <p className='description'>
                  Your teeth influence every part of your body including your
                  gut, your heart, and brain. We use preventative and root-cause
                  philosophy to use your mouth as a marker for the health of
                  your whole body.
                </p>
                <p></p>
              </div>
              <p></p>
            </div>
            <div className='  col-md-4 col-sm-6'>
              <div className='serviceBox'>
                <div className='service-icon'>
                  <img className='service-icon' src={family} alt='' />
                </div>
                <h3 className='title'>COSMETIC AND FAMILY FOCUS</h3>
                <p className='description'>
                  Our team is here to help your whole family smile. We use NO
                  mercury and NO fluoride for cosmetic dental options that will
                  make your smile pop, as well as kids dentistry options for
                  all-ages.
                </p>
                <p></p>
              </div>
              <p></p>
            </div>
            <div className='  col-md-4 col-sm-6'>
              <div className='serviceBox'>
                <div className='service-icon'>
                  <img className='service-icon' src={braces} alt='' />
                </div>
                <h3 className='title'> PREVENTING BRACES</h3>
                <p className='description'>
                  We believe the growth and development of your child is the
                  number one priority for any parent. Through Myofunctional
                  Orthodontics, we aim to guide your child’s face and jaws to
                  grow straight teeth naturally.
                </p>
                <p></p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
