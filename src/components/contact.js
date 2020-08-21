import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Map from './map'







export default  () => {

    return (
<section id="contact" class="page-section contact section-bg">
<div class="container" data-aos="fade-up">
<div class=" section-heading" data-wow-delay="0ms" data-wow-duration="1000ms" >
					<h4 class="mrb-15 text-gray "> Contact</h4>
          <hr className="divider mb-4" />
				

					<p>Recent news on projects, special guests and upcoming events.</p>
          </div>

  <div class="row">
    <div class="col-lg-6">
      <div class="info-box mb-4">
        <i class="bx bx-map"></i>
        <h3>Our Address</h3>
        <p>100 NW 17th Street,  Miami, FLorida 33127</p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="info-box  mb-4">
        <i class="bx bx-envelope"></i>
        <h3>Email Us</h3>
        <p>1stakeyouthfilm@gmail.com</p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="info-box  mb-4">
        <i class="bx bx-phone-call"></i>
        <h3>Call Us</h3>
        <p>+1-305-555-5555</p>
      </div>
    </div>

  </div>

  <div class="row">

    <div class="col-lg-6 ">
 <Map/>
    </div>

    <div class="col-lg-6">
      <form action="forms/contact.php" method="post" role="form" class="php-email-form">
        <div class="form-row">
          <div class="col-md-6 form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div class="validate"></div>
          </div>
          <div class="col-md-6 form-group">
            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div class="validate"></div>
          </div>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
          <div class="validate"></div>
        </div>
        <div class="form-group">
          <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
          <div class="validate"></div>
        </div>
        <div class="mb-3">
          <div class="loading">Loading</div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div class="text-center"><button type="submit">Send Message</button></div>
      </form>
    </div>

  </div>

</div>
</section>



    )

}

