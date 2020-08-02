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
import AboutImg from '../images/about.jpg'
import Dorsey from '../images/dorsey.jpg'


import {Tabs, Tab} from "react-bootstrap"

export default () => (

  <section className="page-section" id="about">
       <div id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
            <img src={AboutImg}class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>The 1st Take will serve as an interactive central
connection</h3>
            <p class="font-italic">
            The 1st Take Youth Film Program will serve as an interactive central
connection between arts, business, media, and entertainment. Students
will have the opportunity to attend workshops in film, editing,
cinematography, and photography.
            </p>
            <ul>
              <li><i class="icofont-check-circled"></i> Film Production.</li>
              <li><i class="icofont-check-circled"></i> Editing</li>
              <li><i class="icofont-check-circled"></i> Cinematography</li>
              <li><i class="icofont-check-circled"></i> Phototography</li>
            </ul>
            <button
                  className="btn btn-primary btn-xl mt-4 js-scroll-trigger"
                
                >
                 Play Video 
                </button>
          </div>
        </div>

      </div>
    </div>
    <div className="container">

<div className="section-heading">
<h1 className=" mt-0">Why 1st Take?</h1>
   <h5 className=" mt-0">Lorem ipsum dolor sit amet </h5> 
   <hr className="divider my-4" />

</div>
  


   <Row>
       <Col lg={12}>
           <ul className="timeline">

               <li className="timeline-item timeline-inverted ">
               <div className="timeline-image" style={{
                    border:'solid 6px #c60303',backgroundImage: `url(${Students})`,backgroundRepeat:'no-repeat' ,backgroundSize: "cover", }}/>

                   <div className="timeline-panel">
                       <div className="timeline-heading">
                       <h4>Education and College Readiness </h4>
                       </div>
                       <div className="timeline-body">
                           <p className="text-muted">Dedicated to teaching the youth career and life skills through hands-on coaching that centers around the complete process of filmmaking. Students will also be raising money in escrow for content creation for college.</p>
                       </div>
                   </div>
               </li>
               <li className="timeline-item">
                   <div className="timeline-image" style={{
                    border:'solid 6px #c60303',backgroundImage: `url(${Training})`,backgroundRepeat:'no-repeat' ,backgroundSize: "cover", }}/>
                   <div className="timeline-panel">
                       <div className="timeline-heading">
                     <h4>Job Placement and Vocational Training</h4>  
                       </div>
                       <div className="timeline-body">
                           <p className="text-muted">from the local community into the film business. According to the labor market statistics 5 motion picture will have 11% more jobs in arts and film will increase by 9.5% between 2019-2026.</p>
                       </div>
                   </div>
               </li>
               <li className="timeline-item timeline-inverted ">
                   <div className="timeline-image">
                    <div className="timeline-image" style={{
                    border:'solid 6px #c60303',backgroundImage: `url(${Dorsey})`,backgroundRepeat:'no-repeat',backgroundSize: "cover",
                    backgroundPosition:'center center' , }}/>
                   </div>
                   <div className="timeline-panel">
                       <div className="timeline-heading">
                          <h4>Arts and Entertainment</h4> 
                       </div>
                       <div className="timeline-body">
                           <p className="text-muted"> for the community through premieres in the community (Dorsey Library/Park) at least once per quarter. Open to invite the community to enjoy the space and premier exclusive content created by our students</p>
                       </div>
                   </div>
               </li>
               <li className="timeline-item">
                   <div className="timeline-image">

                      <div className="timeline-image" style={{
                    border:'solid 6px #c60303',backgroundImage: `url(${Entrepreneurship})`,backgroundRepeat:'no-repeat' ,backgroundSize: "cover", }}/>

                   </div>
                   <div className="timeline-panel">
                       <div className="timeline-heading">
                      <h4>Entrepreneurship and Leadership Skills </h4> 
                        </div>
                       <div className="timeline-body">
                           <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam nisi eos accusantium eligendi velit deleniti nihil ad</p>
                       </div>
                   </div>
               </li>
               <li className="timeline-item timeline-inverted ">
                   <div className="timeline-image">

                       <div className="timeline-image" style={{
                    border:'solid 6px #c60303',backgroundImage: `url(${Overtown})`,backgroundRepeat:'no-repeat' ,backgroundSize: "cover", }}/>

                   </div>
                   <div className="timeline-panel">
                       <div className="timeline-heading">
                      <h4>History Preservation</h4> 
                        </div>
                       <div className="timeline-body">
                           <p className="text-muted">
                           We will be able to archive, document and showcase the history of Overtown and Miami. The students will be creating documentaries by researching and interviewing the elders of the community. 
                           
                           
                           </p>
                       </div>
                   </div>
               </li>





           </ul>


       </Col>
   </Row>




</div>
  
  </section>
  

)
