import React from 'react'
import Img from 'gatsby-image'
import WaveRight from '../images/wave_right.png'
import heroImg from '../images/140.png'
import Scroller from './scroller'

export default ({ data }) => (
  <header className="masthead">
  <div className="container h-100">
    <div className="row h-100">
      <div className="col-lg-6 my-auto order-2 order-lg-1 d-flex flex-column justify-content-center">
        <div className="header-content mx-auto">
        <h1>1st Take Youth Film Program</h1>
           <h2> Enriching the young minds of our community </h2>
           <div>     
            
             <button
                   className="btn btn-outline mt-4 js-scroll-trigger"
                   href="#about"
                   onClick={Scroller.handleAnchorScroll}
                >
                   Find Out More
                 </button>
                
                 </div>
      
        </div>
      </div>
      <div className="col-lg-6 my-auto order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
        <div className="">
         
          
          
                <img src={heroImg} className="img-fluid" alt="" />
        
              <div className="button"></div>
          
       
        </div>
      </div>
    </div>
  </div>
  <img src={WaveRight}/>
</header>

)
