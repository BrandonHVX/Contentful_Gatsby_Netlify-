import React from 'react'
import Img from 'gatsby-image'
import WaveRight from '../images/wave_right.png'
import HeroImg from './HeroImg'
import Scroller from './scroller'
import { Button,Modal } from "react-bootstrap"


export default ({ data }) => (
  <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-6 my-auto order-2 order-lg-1 d-flex flex-column justify-content-center">
          <div className=" mx-auto">
            <h1>1st Take Youth Film Program</h1>
            <h2> Enriching the young minds of our community </h2>
            <div>
              <Button
              variant="btn btn-outline-white mt-5"
                href="#about"
                onClick={Scroller.handleAnchorScroll}
              >
                Find Out More
                 </Button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 my-auto order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
          <div className="">
           <HeroImg/>
            <div className="button"></div>
          </div>
        </div>
      </div>
    </div>
    <img src={WaveRight} />
  </header>

)
