// Call.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import './callback.css'; 
import loaderAnimation from '../assets/fast.json'; 
import { BiFontSize } from 'react-icons/bi';

function Call({isSmallScreen}) {
  const [formData, setFormData] = useState({
    fname: '', 
    lname: '', 
    pnumber: '',
    email: '',
    message: ''
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pnumber' && !/^\d{0,11}$/.test(value)) {
      // If the field is pnumber and the value doesn't match the pattern, return without updating state
      return;
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const formDataForBackend = {
        fname: formData.fname,
        lname: formData.lname,
        pnumber: formData.pnumber,
        email: formData.email,
        message: formData.message
      };
  
      // Send POST request
      const response = await axios.post('http://localhost:5000/call', formDataForBackend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Response:', response.data);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your request has been submitted successfully!'
      });
      setFormData({
        fname: '',
        lname: '', 
        pnumber: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.log('Error response:', error.response); 
        if (error.response.status === 400) {
          Swal.fire({
            icon: 'info',
            title: 'Query Already exists in the database',
            text: 'It seems that you have already requested a callback.We will respond to your request as soon as possible.'
          });
        } else {
          
          Swal.fire({
            icon: 'error',
            title: 'Server Error',
            text: 'Something went wrong. Please try again later.'
          });
        }
      }
    }
    finally {
      setLoading(false); 
    }
  };

  return (
    <div className='call-container' >
      <p9 style={{fontSize:isSmallScreen? "18px " : "",margin:"10px"}}>Occasion Style is committed to providing the highest quality to the customers</p9>
      <h2>Request a Callback</h2>
      <div className="mys-container" >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <label htmlFor="fname">First Name*</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="lname">Last Name*</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <label htmlFor="pnumber">Phone Number*</label>
              <input
                type="number"
                id="pnumber"
                name="pnumber"
                value={formData.pnumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-container">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <button className='call-button' type="submit" disabled={loading}>
            <span>  {loading ? <Lottie
        options={defaultOptions}
        height={28}
        width={40}
        color='blue'
        style={{
        
        }}/> : 'Submit'}</span></button>
        </form>
      </div>
    </div>
  );
}

export default Call;
