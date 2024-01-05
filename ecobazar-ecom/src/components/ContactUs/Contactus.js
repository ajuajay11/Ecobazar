import React from "react";
import Header from "../header/Header";
import FooterSection_All from "../footer/FooterSectionAll";
import map from './../homepage/images/map.png';
import { GoHome } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";

import Breadcrums from "../Breadcrums";

function ContactUs() {
  return (
    <div className="contact-container">
      <Header />
      <Breadcrums data={[<GoHome className='white'/>,' > Contact us > ']}/>
      <div className="mx-w-1300 contact-main">
        <div className="contact-details">
          <div className="contact-left-column">
            <div className="contact-address">
              <div className="contact-box">
              <FiMapPin className="contacticon"/>

                <div className="contact-box-text">
                <p>2715 Ash Dr. San Jose,</p>
                <p> South Dakota 83475</p>
                </div>
              </div>
              <div className="contact-box">
              <IoMailUnreadOutline className="contacticon"/>
                <div className="contact-box-text">
                <p>proxy@gmail.com</p>
                <p>Help.proxy@gmail.com</p>
                </div>
              </div>
              <div className="contact-box">
                < CiPhone className="contacticon"/>
                <div className="contact-box-text">
                <p>(219) 555-0114</p>
                <p>(164) 333-0487</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right-column">
  <div className="contact-right-content">
    <h2>Just Say Hello!</h2>
    <p>
      Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
    </p>
    <form className="contact-form">
    <div className="form-group">
        <div className="form-row">
          <input type="text" placeholder="Enter your name" className="contact-input-half" />
          <input type="text" placeholder="Enter your e-mail" className="contact-input-half" />
        </div>
      </div>
      <div className="form-group">
        <input type="text" id="name" placeholder="Queries" className="contact-input" />
      </div>
      
      <div className="form-group">
        <input type="text" id="subject" placeholder="Subjects" className="contact-input" />
      </div>
    </form>
    <button className="contactbuttoon">Send Message</button>

  </div>
</div>

        </div>
      </div>
      <div className="mapsec">
        <img className='map' src={map} alt="map" />
      </div>
      <FooterSection_All />
    </div>
  );
}

export default ContactUs;
