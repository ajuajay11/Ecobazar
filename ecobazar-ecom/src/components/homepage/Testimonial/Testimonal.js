import React, { useState } from 'react';

const testimonials = [
  { id: 1, text: 'Testimonial 1' },
  { id: 2, text: 'Testimonial 2' },
  { id: 3, text: 'Testimonial 3' },
  { id: 4, text: 'Testimonial 4' },
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
    <div className="testimonial-slider">
        <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
      <div className="slides">
        {testimonials.slice(currentSlide, currentSlide + 3).map((testimonial) => (
          <div key={testimonial.id} className="slide">
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Testimonial;
