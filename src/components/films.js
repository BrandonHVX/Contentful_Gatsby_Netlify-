import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Scroller from './scroller'
import heroImg from '../images/studentfilms.jpeg'
import WaveRight from '../images/wave_right.png'


const Curriculum = () => {


    return (

      <section class="page-section films " id="films">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
          
            <i id="play-video" class="btn icon-btn btn-default video-play-button" href="#"><span ></span></i>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-6 mt-4 order-1 order-lg-2  " data-wow-delay="0ms" data-wow-duration="1000ms" >
            <div className="section-heading">
              <h4 className=" mt-0">Student Films</h4>
              <hr className="divider my-4" />
            </div>
            <h2 class="mrb-25 mb-2">Series of short films filmed by<span class="display-font"> our</span> <span class="display-font">students</span></h2>

     

            <Button class="outline-primary mt-5">Watch Films</Button>
          </div>
        </div>
      </div>

    </section>
    );
};



export default Curriculum;