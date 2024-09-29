import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './gen.css';

function Gen({isSmallScreen}) {
  const [showHeadings, setShowHeadings] = useState(false);
  const countUpRefs = [useRef(null), useRef(null)];

  useEffect(() => {
    const observers = countUpRefs.map(ref => {
      return new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShowHeadings(true);
          }
        });
      });
    });

    countUpRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      countUpRefs.forEach((ref, index) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="gen-container">
      <header className="headings">
        {showHeadings && (
          <div >
            <p style={{fontSize:isSmallScreen ? "14px":""}}>Bridal Attire is trusted Pakistan wide</p>
            <p1 style={{fontSize:isSmallScreen ? "14px":""}}>By over 10,000 business and customers like you</p1>
          </div>
        )}
      </header>
      <div className="newcontainer" style={{ width: '100%', overflowX: 'auto' }}>
        <div className="newheadings" ref={countUpRefs[0]}>
          {showHeadings && (
            <>
              <h2>
                <CountUp start={0} end={60} duration={4.5} />
                k+
              </h2>
              <p>Customers every year.</p>
            </>
          )}
        </div>
        <div className="newheadings" ref={countUpRefs[1]}>
          {showHeadings && (
            <>
              <h2>
                <CountUp start={0} end={150} duration={6.5} />
                +
              </h2>
              <p>Products every month.</p>
            </>
          )}
        </div>
        <div className="newheadings"  ref={countUpRefs[1]}>
        {showHeadings && (
            <>         
             <h2>    <CountUp start={0} end={46} duration={4.5} />
                k+
              </h2>
          <p>Dress Delivered.</p>
          </>
        )}
        </div>
        <div className="newheadings" ref={countUpRefs[1]}>
          {showHeadings && (
            <>
             <h2>
                <CountUp start={0} end={65} duration={4.5} />
                +
              </h2>
          <p>Staff Members.</p>
            </>
          )}
       
        </div>
      </div>
    </div>
  );
}

export default Gen;
