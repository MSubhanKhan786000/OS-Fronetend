import React from 'react';
import './Not.css'
import Header from '../header/header';
import Footer from '../footer/footer'
function Notfound() {
  return (
    <div className="error-container">
      <div className='header'><Header/>
      </div>
      <h1>404 Error - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist or its removed.</p>
    </div>
    

  )
}
export default Notfound;