import React from 'react';
import Homepage from './components/homepage/Homepage'
import './index.css'
import './components/homepage/homepage.css'
import './components/homepage/Testimonial/testimonial.css'
import './components/footer/footer.css'
import './components/homepage/posters/posters.css'
import './components/header/header.css'
import './components/ShoppingCartPage/cartpage.css'
import './components/CategoriesFilterpage/allCategories.css'
import './components/homepage/LatestNews/Latestnews.css'
import { Provider } from 'react-redux';
import WishlistPage from './components/WishlistPage/WishlistPage'
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from './components/CategoriesFilterpage/Categories';
import AllCartProducts from './components/ShoppingCartPage/AllCartProducts';

function App() {
  return (
    
   <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/shoppingcart" element={<AllCartProducts />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </Router>

     
  
   </Provider>
  );
}

export default App;

