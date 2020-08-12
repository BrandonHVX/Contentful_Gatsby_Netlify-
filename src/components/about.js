import React from 'react'
import Img from 'gatsby-image'
import Scroller from './scroller'
import { Row, Col } from "react-bootstrap"
import Students from '../images/students.jpg'
import Training from '../images/training.jpg'
import Overtown from '../images/overtown.jpg'
import Entrepreneurship from '../images/minority.jpg'

import WaveRight from '../images/wave_right.png'
import heroImg from '../images/1stTakeHero-v2.png'
import AboutImg from '../components/image/AboutImg'
import Dorsey from '../images/dorsey.jpg'


import {Tabs, Tab} from "react-bootstrap"

export default () => (

<section class="page-section" id="about">
      <div class="container">
      <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
 
            <i id="play-video" class="btn icon-btn btn-default video-play-button" href="#"><span ></span></i>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-6 order-1 order-lg-2  section-heading mt-5 " data-wow-delay="0ms" data-wow-duration="1000ms" >
					<h4 class="mrb-15 text-gray ">About Our Company</h4>
          <hr className="divider mb-4" />
					<h2 class="mrb-25">The 1st Take will serve as an<span class="display-font"> interactive </span> central connection between <span class="display-font"> arts, business, media and entertainment.</span></h2>



					<p>The skills, education, and guidance provided at 1st Take will prepare our youth to have the skills needed to be successful.</p>
			
					<button href="#" class="btn-xl mt-5">Watch Video</button>
				</div>
        </div>
      </div>
   
    </section>
  

)
