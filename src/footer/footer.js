import React from 'react';
import './footer.css'; // Importing CSS for styling
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import Last from '../last/last'
const Footer = () => {

  const navigate=useNavigate()

// about page redirecting
  const about=()=>{
    navigate("/About")
  }

  //privacy page redirecting
  const privacy=()=>{
    navigate("/privacy-policy")
  }
//Refund
  const Refund=()=>{
    navigate("/Refund")
  }

  //Shipping Policy
  const Ships=()=>{
    navigate("/shipping-policy")
  }
  //Terms
  const Terms=()=>{
    navigate("/Terms")
  }
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Find us</h3>
        <p>398-A SherShah Colony Link Raiwand Road,Lahore Pakistan</p>
       
      </div>
      <div className='footer-sectiond'>
        <h3>
            Contact Us
        </h3>
        <p> 03014717085</p>
  
      </div>
      <div className="footering-section">
        <h3>Our Company</h3>
        <ul>
          <li onClick={about}>About Us</li>
          <li onClick={privacy}> Privacy Policy</li>
          <li onClick={Terms}>Term and Conditions</li>
          <li onClick={Refund}>Return & Refund Policy</li>
          <li onClick={Ships}>Shipping & Delievery Details</li>
        </ul>
      </div>
      <div className="footers-section">
        <h3>Our Products</h3>
        <ul>
          <li onClick={about}>Women  lehnga </li>
          <li onClick={privacy}>Women sari</li>
          <li onClick={Terms}>Mens Sherwani</li>
          <li onClick={Refund}>Three Piece </li>
          <li onClick={Ships}>Waist COAT</li>
        </ul>
      </div>
      <div className="Social-media">
        <h3>Social Media</h3>
        <ul>
          <li onClick={about}><FaFacebook /> </li>  <li onClick={privacy}><FaInstagramSquare /></li>
          
      
        </ul>
        
      </div>
      {/* <div> 
       <Last/>
        </div> */}
    </footer>

  );
};

export default Footer;
