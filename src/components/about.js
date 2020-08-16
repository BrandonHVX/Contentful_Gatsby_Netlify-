import React from 'react'
import Img from 'gatsby-image'
import Scroller from './scroller'
import { Button,Modal } from "react-bootstrap"
import Students from '../images/students.jpg'
import Training from '../images/training.jpg'
import Overtown from '../images/overtown.jpg'
import Entrepreneurship from '../images/minority.jpg'
import WaveRight from '../images/wave_right.png'
import heroImg from '../images/1stTakeHero-v2.png'
import ReactPlayer from 'react-player/youtube'

import Dorsey from '../images/dorsey.jpg'
import Image from './Img'
import WhyImage from './whyImg'
import Twelve from '../images/cub_twelve.svg'
import Eleven from '../images/cub_eleven.svg'
import Ten from '../images/cub_ten.svg'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body closeButton>
      <ReactPlayer width='100%' url='https://www.youtube.com/watch?v=NHuVM9_imrE&t=18s' />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function AboutPlayButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
  
			<Button variant="btn btn-outline" onClick={() => setModalShow(true)} >Play Video</Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}







export default () => (


  <div>
    <section class="page-section about" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
            <Image />
            <i id="play-video" class="btn icon-btn btn-default video-play-button" href="#"><span ></span></i>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-6 mt-4 order-1 order-lg-2  " data-wow-delay="0ms" data-wow-duration="1000ms" >
            <div className="section-heading">
              <h4 className=" mt-0">About Us</h4>
              <hr className="divider my-4" />
            </div>
            <h2 class="mrb-25 mb-2">The 1st Take will serve as an<span class="display-font"> interactive </span> central connection between <span class="display-font"> arts, business, media and entertainment.</span></h2>

            <p>Our mission is to enrich the young minds of our community by providing them with hands-on training that centers around the complete process of filmmaking.</p>


         <AboutPlayButton/>
          </div>
        </div>
      </div>

    </section>
    <section class="why-section bg-silver pdt-110 pdb-110">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-xl-6 wow fadeInRight animated" data-wow-delay="0ms" data-wow-duration="1000ms">
					<h2 class="mrb-25">Why 1st Take?</h2>
					<p class="mrb-40 mb-5 mrb-sm-60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia rerum possimus error quia consequuntur iure ipsum quod ipsam Voluptatum aliquam, nostrum recusandae perferendis?</p>
					<div class="icon-box-two mrb-40">
						<div class="icon bg-gradient-color f-left">
							<span class="webexflaticon flaticon-target-1"></span>
						</div>
						<div class="icon-details ">
							<h4 class="icon-box-title mrb-10">Education and College Readiness</h4>
							<p>1st Take Youth Film Program will be dedicated to teaching the youth career and life skills through hands-on coaching that centers around the complete process of filmmaking.</p>
						</div>
					</div>
					<div class="icon-box-two mrb-40">
						<div class="icon bg-gradient-color f-left">
							<span class="webexflaticon flaticon-plan"></span>
						</div>
						<div class="icon-details ">
							<h4 class="icon-box-title mrb-10">Economic Rejuvenation</h4>
							<p>Repurposing an inactive space and making it a Diverse Event Space for the community to use and enjoy, while instigating economic development.Space will be available for the community to enjoy as needed.</p>
						</div>
					</div>
					<div class="icon-box-two">
						<div class="icon bg-gradient-color f-left">
							<span class="webexflaticon flaticon-guarantee"></span>
						</div>
						<div class="icon-details ">
							<h4 class="icon-box-title mrb-10">Entrepreneurship and Leadership Skills</h4>
							<p>Students will use entrepreneurship, leadership and team skills to develop content. They will learn to write, produce, schedule, budget, create, edit/finalize, market and sell their projects. </p>
						</div>
					</div>
				</div>
				<div class="col-md-12 col-xl-6 wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1000ms" >
			  <WhyImage />
				</div>
			</div>
		</div>
	</section>


  </div>


)
