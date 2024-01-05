import React, { useEffect, useState } from 'react';
import Homepage from './components/homepage/Homepage'
import './index.css'
import './components/homepage/homepage.css'
import './components/homepage/Testimonial/testimonial.css'
import './components/footer/footer.css'
import './components/homepage/posters/posters.css'
import './components/Loader/Loader.css'
import './components/header/header.css'
import './components/ContactUs/contact.css'
import './components/ShoppingCartPage/cartpage.css'
import './components/Checkout/checkout.css'
import './components/CategoriesFilterpage/allCategories.css'
import './components/homepage/LatestNews/Latestnews.css'
import { Provider } from 'react-redux';
import Contactus from './components/ContactUs/Contactus';
import WishlistPage from './components/WishlistPage/WishlistPage'
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from './components/CategoriesFilterpage/Categories';
import AllCartProducts from './components/ShoppingCartPage/AllCartProducts';
import Checkout from './components/Checkout/Checkout';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading]= useState(true)

useEffect(()=>{
  const fakedataFetch=()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }
  
  fakedataFetch();
},[])

  return isLoading?(<Loader/>):(
    
   <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shoppingcart" element={<AllCartProducts />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
    </Router>

     
  
   </Provider>
  );
}

export default App;

