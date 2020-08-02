import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Scroller from './scroller'
import heroImg from '../images/studentfilms.jpeg'
import WaveRight from '../images/wave_right.png'


const Curriculum = () => {


    return (

      <section className="page-section films " id="films">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto order-2 order-lg-1 d-flex flex-column justify-content-center">
            <div className="header-content mx-auto">
            <h1> Short Film Projects</h1>
               <h2>Created by our students showcasing our projects. </h2>
               <div>     
                
                 <button
                       className="btn btn-outline mt-4 js-scroll-trigger"
                       href="#about"
                       onClick={Scroller.handleAnchorScroll}
                    >
                       View Our Films
                     </button>
                    
                     </div>
          
            </div>
          </div>
          <div className="col-lg-5 my-auto order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={heroImg} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>

    </section>
    );
};



export default Curriculum;