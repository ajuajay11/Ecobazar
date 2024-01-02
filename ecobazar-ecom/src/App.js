import React from 'react';
import Homepage from './components/homepage/Homepage'
import './index.css'
import './components/homepage/homepage.css'
import './components/homepage/Testimonial/testimonial.css'
import './components/footer/footer.css'
import './components/header/header.css'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    
   <Provider store={store}>
     <div className="App"> 
       <Homepage/>
     </div>
   </Provider>
  );
}

export default App;

