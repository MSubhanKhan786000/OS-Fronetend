import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Call from '../callback/callback';
import Swal from 'sweetalert2';
import './modal.css';

const Modal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [loading, setLoading] = useState(false);
  // const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    pnumber: '',
    email: '',
    address: '',
    password: '',
    city: ''
  });

   //routing function 
const navigate=useNavigate()
  // Register function
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataForBackend = { ...formData };

      // Send POST request for registration
      const response = await axios.post('http://localhost:5000/singginupp', formDataForBackend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // setUserData("User Data is--->", response.data);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your account has been created successfully!'
      });
      setFormData({
        fname: '',
        lname: '',
        pnumber: '',
        email: '',
        address: '',
        password: '',
        city: ''
      });
      window.location = '/login-page'
    } catch (error) {
      console.error('Registration Error:', error);
      if (error.response) {
        console.log('Registration Error response:', error.response);
        if (error.response.status === 409) {
          Swal.fire({
            icon: 'error',
            title: 'Server Error'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Email Already in Use',
            text: 'The provided email is already registered.'
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataForBackend = {
        email: formData.email,
        password: formData.password
      };

      // Send POST request for login
      const response = await axios.post('http://localhost:5000/loggering', formDataForBackend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login successful!'
      });
    //  console.log("response data is-->",response.data);
       navigate("/", {state:response.data.fname}  )
       console.log("Login Data is  ",{state:response.data.fname});
       localStorage.setItem('userId', response.data.userId);

   
     
    
    } catch (error) {
      console.error('Login Error:', error);
      if (error.response) {
        console.log('Login Error response:', error.response);
        if (error.response.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Credentials',
            text: 'Please check your email and password.'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Server Error',
            text: 'Something went wrong. Please try again later.'
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  //forgot
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataForBackend = {
        email: formData.email
      };

      // Send POST request for forgot password
      const response = await axios.post('http://localhost:5000/forgoott', formDataForBackend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Forgot Password Response:', formDataForBackend);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Password reset link sent to your email!'
      });
      setFormData({
        ...formData,
        email: ''
      });
      window.location = 'login-page'
    } catch (error) {
      console.error('Forgot Password Error:', error);
      if (error.response) {
        console.log('Forgot Password Error response:', error.response);
        if (error.response.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Email Not Found',
            text: 'The provided email is not registered.'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Server Error',
            text: 'Something went wrong. Please try again later.'
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          {activeTab === 'login' && <h2>Login</h2>}
          {activeTab === 'signup' && <h2>Sign Up</h2>}
          {activeTab === 'forgot' && null /* No header for Forgot Password tab */}
        </div>
        <div className="modal-content">
          <div className="tabs">
            {activeTab !== 'forgot' && (
              <>
                <button className={activeTab === 'login' ? 'active' : ''} onClick={() => switchTab('login')}>Login</button>
                <button className={activeTab === 'signup' ? 'active' : ''} onClick={() => switchTab('signup')}>Sign Up</button>
              </>
            )}
          </div>
          {activeTab === 'login' && (
            <form onSubmit={handleLogin}>
              <input type="text"
                name="email"
                placeholder="Email"
                style={{ width: '400px', fontSize: '19px' }}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                style={{ width: '400px', fontSize: '19px', marginBottom: '4px' }}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Login</button>
              <p>Forget Your Password ? <span onClick={() => switchTab('forgot')}>Click Here</span></p>
            </form>
          )}
          {activeTab === 'signup' && (
            <form onSubmit={handleRegister}>
              <input type="text"
                name="fname"
                placeholder="First Name"
                style={{ width: '400px', fontSize: '16px' }}
                value={formData.fname}
                onChange={handleChange}
                required
              />
              <input type="text"
                name="lname"
                placeholder="Last Name"
                style={{ width: '400px', fontSize: '16px' }}
                value={formData.lname}
                onChange={handleChange}
                required
              />
              <input type="email"
                name="email"
                placeholder="Email"
                style={{ width: '400px', fontSize: '16px' }}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                style={{ width: '400px', fontSize: '16px' }}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input type="number"
                name="pnumber"
                placeholder="Phone No"
                style={{ width: '400px', fontSize: '16px' }}
                value={formData.pnumber}
                onChange={handleChange}
                pattern="\d{1,4}"
                required
              />
              <input type="text"
                name="address"
                placeholder="Address"
                style={{ width: '400px', fontSize: '16px' }}
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input type="text"
                name="city"
                placeholder="City"
                style={{ width: '400px', fontSize: '16px' }}
                value={formData.city}
                onChange={handleChange}
                required
              />
              <button type="submit">Sign Up</button>
              <p>Already have an account? <span onClick={() => switchTab('login')}>Login</span></p>
            </form>
          )}
          {activeTab === 'forgot' && (
            <form onSubmit={handleForgotPassword}>
              <h2 style={{ textAlign: 'center', fontFamily: "sans-serif" }}>Forget Password</h2>
              <input type="email"
                name="email"
                placeholder="Email"
                style={{ width: '400px', fontSize: '16px' }}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button type="submit">Reset Password</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
