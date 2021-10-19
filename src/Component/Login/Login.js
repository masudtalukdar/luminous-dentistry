import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import UseFirebase from '../Hooks/useFirebase';
import './Login.css';
import googleLogo from '../../Images/logo/google-icon.png';
import facebookLogo from '../../Images/logo/facebook.png';

const Login = () => {
  const {
    createUserWithEmail,
    signInWithEmail,
    googleSignIn,
    facebookSignIn,
    user,
  } = UseFirebase();
  const [userdata, setUserData] = useState({});
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const newData = { ...userdata, email: e.target.value };
      setUserData(newData);
    }
    if (e.target.name === 'pass') {
      const newData = { ...userdata, pass: e.target.value };
      setUserData(newData);
    }
    if (e.target.name === 'name') {
      const newData = { ...userdata, name: e.target.value };
      setUserData(newData);
    }
  };
  const handleSubmit = () => {
    console.log(userdata);
    createUserWithEmail(userdata.name, userdata.email, userdata.pass);
  };
  const handlelogin = () => {
    signInWithEmail(userdata.email, userdata.pass);
  };
  const history = useHistory();
  useEffect(() => {
    if (user.email) {
      history.push('/');
    }
  }, [user]);

  return (
    <>
      <div className='form d-flex justify-content-center align-items-center p-5'>
        <div className='signIn'>
          <h3 className='mb-5'>Sign Up</h3>
          <input
            name='name'
            onBlur={handleChange}
            type='text'
            placeholder='Name'
          />
          <br />
          <br />
          <input
            name='email'
            onBlur={handleChange}
            type='email'
            placeholder='Email'
          />
          <br />
          <br />
          <input
            name='pass'
            onBlur={handleChange}
            type='password'
            placeholder='Password 6 characters'
          />
          <br />
          <br />
          <button className='btn btn-danger' onClick={handleSubmit}>
            register
          </button>
        </div>
        {/*  */}
        <div className='p-5 login'>
          <h3 className='mb-5'>log in</h3>
          <input
            name='email'
            onBlur={handleChange}
            type='email'
            placeholder='Email'
          />
          <br />
          <br />
          <input
            name='pass'
            onBlur={handleChange}
            type='password'
            placeholder='Password'
          />
          <br />
          <br />
          <button className='btn btn-success' onClick={handlelogin}>
            log in
          </button>
          <br />
          <br />
          <div>
            <img
              className='googleLogo'
              style={{ width: '40px' }}
              src={googleLogo}
              onClick={googleSignIn}
              alt=''
            />
            <img
              style={{ width: '40px' }}
              src={facebookLogo}
              onClick={facebookSignIn}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
