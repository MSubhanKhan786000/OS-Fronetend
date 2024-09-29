import React  from 'react'
import'../shipping/shipping.css'
import cover from '../assets/cover.jpg'
import Flag from '../assets/Flag.png'

function Shipping({isSmallScreen}){
 
    return(
        <div class="shippings-card" >
        <div class="content">
                    
        <div class="text-content">
            <p>Enjoy free Shipping on order of Rs.10,000</p>
                <h2>Free Shipping across Pakistan</h2>
            </div>
            {
                isSmallScreen ?
                    <></>
                :
                <div className='cimg-container' >
                    <img className='shippings-card img ' src={Flag} />
                </div>

            }

        </div>
    </div>
    
    )
}
export default Shipping;