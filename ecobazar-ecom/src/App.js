import React from 'react';
import Homepage from './components/homepage/Homepage'
import './index.css'
import './components/homepage/homepage.css'
import './components/homepage/Testimonial/testimonial.css'
import './components/footer/footer.css'
import './components/homepage/posters/posters.css'
import './components/header/header.css'
import './components/homepage/LatestNews/Latestnews.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from './components/CategoriesFilterpage/Categories';

function App() {
  return (
    
   <Provider store={store}>
    <Router>
      <Routes>
       
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
       
      </Routes>
    </Router>

     
  
   </Provider>
  );
}

export default App;

