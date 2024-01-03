import React from 'react';
import Header from '../header/Header'
import Hero from './hero/hero';
import FooterSection_All from '../footer/FooterSectionAll';
import PopularSection from './popularCategories/PopularSection';
import MainPopularProduct from './PopularProducts/MainPopularProduct';
import Posters from './posters/Posters';
import Ad from './Advertaisment/Ad';
import AllFeatureProduct from './FeaturedProducts/AllFeatureProduct';
import LatestnewspropSec from './LatestNews/LatestnewsPropSec';
import Hotdeals from './HotDeals/Hotdeals';
import Testimonial from './Testimonial/Testimonal';
import Followus from './FollowusOninstagram/Followus';

function Homepage() {
 
  return (
    <div className="App"> 
    <Header/>
    <div className="homepageAllsection">
      <Hero/>
      <PopularSection />
      <MainPopularProduct/>
      <Posters/>
      <Hotdeals/>
      <LatestnewspropSec/>
      <Ad/>
      <Testimonial/>
      <AllFeatureProduct />
      <Followus/>
    </div>
    
    <FooterSection_All/>

   </div>
  );
}

export default Homepage;

