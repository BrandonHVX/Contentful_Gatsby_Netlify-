import React from 'react'
import Img from 'gatsby-image'
import WaveRight from '../images/wave_right.png'
import heroImg from '../images/1stTakeHero-v2.png'

export default ({ data }) => (
    <header className="masthead">

       <div className="container">
   <div className="row h-100  ">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto ">
              <h2 className="mb-5">
                New Age is an gatsby starter for app landing page that will help
                you beautifully showcase your new mobile app, or anything else!
              </h2>
           
                <a href="#download" className="btn btn-outline btn-xl">
                  Start Now for Free!
                </a>
   
            </div>
          </div>
          <div className="col-lg-5 my-auto ">
          <div className="device-container">
          <img src={heroImg} alt="" />
          </div>
          </div>
        </div>

       </div>




      <img class="wave-right" src={WaveRight}/>
     
    </header>
)
