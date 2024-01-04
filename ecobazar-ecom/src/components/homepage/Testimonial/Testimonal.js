import React, { useState } from 'react';
import robert from './../images/robert.png'
import Apostrophe from './../images/Apostrophe.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import ratingfive from './../images/Rating_four.png'

const testimonials = [
  { id: 1,name:'Robert Fox', text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget' },
  { id: 2,name:'Eleanor Pena', text: ' Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget. Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.' },
  { id: 3,name:'Dianne Russell', text: 'elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet ' },
  { id: 4,name:'Ajay k', text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget' },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonials.length - 3 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === testimonials.length - 3 ? 0 : currentSlide + 1);
  };

  return (
    <div className="testimonial-sliderAll  d-flex">
       <div className="testimonial-slider mx-w-1300">
          <div className="viewAllAndTitle">
            <div className="title">
              <h2>Hot Deals</h2>
            </div>
            <div className="ViewAll d-flex">
              <button onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></button>
              <button onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>
            
          <div className="slides d-flex">
            {testimonials.slice(currentSlide, currentSlide + 3).map((testimonial) => (
              <div key={testimonial.id} className="slide d-flex">
                <div className="faApostrophe"><img width='24px' className="" src={Apostrophe} /></div>
                <div className="testimonialtext">
                  {testimonial.text}
                </div>
                <div className="d-flex testnameAndstar">
                  <div className="testimonialname d-flex">
                    <div className="">
                    <img className="" src={robert} />
                    </div>
                    <div className="d-flex Robertlogo">
                      <span className="">{testimonial.name}</span>
                      <p className="">Customer</p>
                    </div>
                  </div>
                  <div className="">
                  <img className="" src={ratingfive} />

                  </div>
                </div>
              </div>  
            ))}
          </div>
       </div>
      
      
    </div>
  );
};

export default Testimonial;
