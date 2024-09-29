import React, { useRef } from 'react';
import Header from '../header/header'
import './home.css'
import CardList from '../cards/card'
import ScrollAnimation from 'react-animate-on-scroll';
import Earn from '../Earn/earn';
import Gen from '../generaten/gen'
import Call from '../callback/callback';
import Shipping from '../shipping/shipping'
import Footer from '../footer/footer';
import Last from '../last/last'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Reviews from '../component/ReviewComponent/Reviews';

function Home() {

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container">
        <div className="block1">
          <p className='para1'>Wedding Dresses</p>
          <p className='para2'> for Rent</p>
          <p className='para3'>Elevate your special day with our exquisitie wedding dresses rentals.Offering timeless elegance and the unforgettable style for bride.</p>
          <div> <button className="homebutton" onClick={() => scrollToSection(section1Ref)}>Browse Catalog</button></div>
          <p className='last'>Free shipping for orders over 10,000 </p>
        </div>
        <div className="block2">
        </div>
      </div>
      <div className='next' ref={section1Ref}>
        <ScrollAnimation animateIn="bounceInRight">
          <CardList />
        </ScrollAnimation>
      </div>
      <div>
        <Earn isSmallScreen={isSmallScreen} setIsSmallScreen={setIsSmallScreen} />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <ScrollAnimation animateIn="bounceInRight">
          <Gen isSmallScreen={isSmallScreen} />
        </ScrollAnimation>
      </div>
      {<div>
        <Shipping isSmallScreen={isSmallScreen} />
      </div>}
      <div>
        <Call isSmallScreen={isSmallScreen} />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Last />
      </div>
    </div>




  )
}
export default Home;