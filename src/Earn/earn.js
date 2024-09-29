
import  { useState, useEffect } from 'react';

import React from 'react';
import './earn.css'
import earn2 from '../assets/earn2.png'
import { useLocation, useNavigate} from 'react-router-dom';

function Earn({isSmallScreen,setIsSmallScreen}){
  const navigate=useNavigate();

    return(
        <div className="parallel-blocks">
      <div className="block" >
        <img src={earn2} className='' width={"90%"} alt="Block 2 Image"
        style={{
          width: isSmallScreen ? "100%" : "",
          padding:'0px',
        }} 
         />
      </div>
      <div className="block-with-image" style={{margin:"30px"}}>
        <h2> Monetise your Wardrobe</h2>
        <p>Why let you closet stay idle?Monetise and rent your dresses to us to earn some cash on the side</p>
        <button className="mybtn" onClick={()=>{navigate("/earn-with-us")}}>Earn With Us</button>
      </div>
    </div>
    )
}
export default Earn;