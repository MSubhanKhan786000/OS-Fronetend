import React, { useState } from "react";
import axios from "axios"; // Import Axios
import '../Earning/earning.css';
import Earn from '../Earn/earn';
import Header from "../header/header";
import earn2 from '../assets/earn2.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import no from '../assets/no.png';
import Footer from '../footer/footer';
import icon4 from '../assets/icon4.jpeg';
import { useNavigate,useLocation } from "react-router-dom";
import icon5 from '../assets/icon5.png';

function Earning() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
          fname: '',
          lname: '',
          pnumber: '',
          email: ''
  });
// const Location=useLocation();
// const navigate=location.state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fname', formData.fname);
      formDataToSend.append('lname', formData.lname);
      formDataToSend.append('pnumber', formData.pnumber);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('image', selectedFile);

      // Use Axios to send form data
      const response = await axios.post('http://localhost:5000/imaginnes', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' 
        }
      

      });
console.log("the post apis is->",response.data);

      if (response.status === 201) {
        window.location.reload();
        console.log('Form submitted successfully');
        alert('Form Submitted Successfully')
        setFormData({
          fname: '',
          lname: '',
          pnumber: '',
          email: '',
          image:''
        });
       
        setSelectedFile(null);
      } else {
        console.error('Failed to submit form');
        alert("there is some error in sumbitting the form")
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className='earning-container'>
      <Header />
      <div className="parallel-blocks">
        <div className="block">
          <img src={earn2} className='imagine' alt="Block 2 Image" />
        </div>
        <div className="blocked-with-image">
          <h2 className="hheader"> Earn with Us</h2>
          <p className="p1">Why let your closet stay idle? Monetize and rent your dresses to us to earn some cash on the side</p>
        </div>
      </div>
      <div className="earnings-container">
        <h2>Join the Occasion Style Rental Revolution</h2>
        <div className="earnings-card">
          <img className='images' src={icon1} alt="Icon 1" />
          <h2>Unlock Additional Income </h2>
          <p>Transform Your closet into a Source of Extra Cash by Sharing your wardrobe on your rental Platform</p>
        </div>
        <div className="earnings-card">
          <img className="imager" src={icon5} alt="Icon 5" />
          <h2>Streamline Your Closet</h2>
          <p>Simplify your life and create space by clearing out those items you no longer wear or need</p>
        </div>
        <div className="earnings-card">
          <img className="images" src={icon3} alt="Icon 3" />
          <h2>Embrace Sustainability</h2>
          <p>Join the movement towards a greener future by giving your clothing a second life through rental </p>
        </div>
      </div>
      <div className="headerings-container">
        <h4 className="header4">Lend your wardrobe to Occasion Style</h4>
        <h3 className='para4'>Earn With US</h3>
      </div>
      <div className="hooks-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name*"
            value={formData.fname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name*"
            value={formData.lname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pnumber"
            id="pnumber"
            placeholder="Phone Number*"
            value={formData.pnumber}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="upload-container">
            <input type="file" id="fileInput" onChange={handleFileChange} 
            required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
export default Earning;
