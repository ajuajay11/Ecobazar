import React from 'react';
import Header from './header/Header'
import './../homepage/homepage.css'
import Hero from './hero/hero';
import FooterSection_All from './footer/FooterSectionAll';
import PopularSection from './popularCategories/PopularSection';

function Homepage() {
 
  return (
    <div className="App"> 
    <Header/>
    <Hero/>
    <PopularSection />
    <FooterSection_All/>
   </div>
   
  );
}

export default Homepage;

