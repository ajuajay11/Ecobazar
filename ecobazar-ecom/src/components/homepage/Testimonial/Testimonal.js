import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight} from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  { id: 1, text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget' },
  { id: 2, text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget' },
  { id: 3, text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget' },
  { id: 4, text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget' },
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
            <div className="ViewAll">
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
            </div>
          </div>
            
          <div className="slides d-flex">
            {testimonials.slice(currentSlide, currentSlide + 3).map((testimonial) => (
              <div key={testimonial.id} className="slide">
                <div className="faApostrophe"><FontAwesomeIcon icon={faAlignRight} /></div>
                <div className="">
                  {testimonial.id}
                </div>
                <div className="">
                  <div className=""></div>
                  <div className=""></div>
                </div>
              </div>  
            ))}
          </div>
       </div>
      
      
    </div>
  );
};

export default Testimonial;
