// import Hotdealright from "./Hotdealright";
// import apple from './../images/Apple.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight,faHeart,faEye,faShoppingBag} from '@fortawesome/free-solid-svg-icons';
// import ratingfour from './../../homepage/images/Rating_four.png'
// import React, { useState, useEffect } from 'react';

// // import ratingfive from './../homepage/images/Rating_five.png'

// function Hotdeals() {
//     const [timer, setTimer] = useState({
//         days: 5,
//         hours: 0,
//         minutes: 20,
//         seconds: 0
//       });

//       useEffect(() => {
//         const countdown = setInterval(() => {
//           setTimer(prevTimer => {
//             let { days, hours, minutes, seconds } = prevTimer;

//             if (seconds > 0) {
//               seconds -= 1;
//             } else {
//               seconds = 59;
//               if (minutes > 0) {
//                 minutes -= 1;
//               } else {
//                 minutes = 59;
//                 if (hours > 0) {
//                   hours -= 1;
//                 } else {
//                   hours = 23;
//                   if (days > 0) {
//                     days -= 1;
//                   } else {
//                     clearInterval(countdown);
//                     // Timer has ended, perform necessary actions
//                   }
//                 }
//               }
//             }

//             return { days, hours, minutes, seconds };
//           });
//         }, 1000);

//         return () => clearInterval(countdown);
//       }, []);

//     return(
//         <>
//         <div className="viewAllAndTitle">
//                 <div className="title"><h2>Popular Categories</h2> </div>
//                 <div className="ViewAll">View All  <FontAwesomeIcon icon={faArrowRight} /></div>
//             </div>
//         <div className="Hotdealssec HotdealsecfirstImg d-flex">
//             <div className="offersec">
//                 <div className="PopularProducts d-flex">
//                 <div className="popularCategoryImgsection2 d-flex">
//                 <div className="p-img hotdeal_p_img">
//                     <span className="saleoff">Sale 30%</span>
//                     <img className="hotdealsOneImage" src={apple} alt="greenapple"/>
//                     <div className="wishlistAndView d-flex">
//                         <div className="wishlist">
//                         <FontAwesomeIcon icon={faHeart} />
//                         </div>
//                         <div className="viewimg">
//                         <FontAwesomeIcon icon={faEye} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="p-contents d-flex">
//                     <div className="p-nameAndprice">
//                         <span>Chinese cabbage</span>
//                         <div><span className="price">$12.00</span> <span className="discount line-thr">$24.00</span></div>
//                         <img className="star" src={ratingfour} alt="greenapple"/>
//                     </div>
//                     <div className="timerbutton">
//                         <span>{timer.days}d {timer.hours}h {timer.minutes}m {timer.seconds}s</span>
//                      </div>

//                 </div>
//             </div>
//         </div>
//                 <div className="offerbottom d-flex">
//                 <div className="PopularProducts d-flex">
//             <div className="popularCategoryImgsection2 d-flex">
//             <div className="p-img ">
//                     <span className="saleoff">Sale 30%</span>
//                     <img className="hotdealsOneImage" src={apple} alt="greenapple"/>
//                     <div className="wishlistAndView d-flex">
//                         <div className="wishlist">
//                         <FontAwesomeIcon icon={faHeart} />
//                         </div>
//                         <div className="viewimg">
//                         <FontAwesomeIcon icon={faEye} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="p-contents d-flex">
//                 <div className="p-nameAndprice">
//                         <span>Chinese cabbage</span>
//                         <div><span className="price">$12.00</span> <span className="discount line-thr">$24.00</span></div>
//                         <img className="star" src={ratingfour} alt="greenapple"/>
//                     </div>
//                     <div className="cartButton">
//                         <span><FontAwesomeIcon className="cartsvg" icon={faShoppingBag} /></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="PopularProducts d-flex">
//             <div className="popularCategoryImgsection2 d-flex">
//             <div className="p-img">
//                     <span className="saleoff">Sale 30%</span>
//                     <img className="hotdealsOneImage" src={apple} alt="greenapple"/>
//                     <div className="wishlistAndView d-flex">
//                         <div className="wishlist">
//                         <FontAwesomeIcon icon={faHeart} />
//                         </div>
//                         <div className="viewimg">
//                         <FontAwesomeIcon icon={faEye} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="p-contents d-flex">
//                 <div className="p-nameAndprice">
//                         <span>Chinese cabbage</span>
//                         <div><span className="price">$12.00</span> <span className="discount line-thr">$24.00</span></div>
//                         <img className="star" src={ratingfour} alt="greenapple"/>
//                     </div>
//                     <div className="cartButton">
//                         <span><FontAwesomeIcon className="cartsvg" icon={faShoppingBag} /></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//                 </div>
//             </div>
//             <div className="nonoffersec">
//                 <Hotdealright/>
//             </div>

//         </div>
//         </>

//     )
// }

// export default Hotdeals;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHeart,
  faEye,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import apple from "./../images/Apple.png";
import ratingfour from "./../../homepage/images/Rating_four.png";
import Hotdealright from "./Hotdealright";
import Data from "../../Data/Data";
import PopularProducts from "../PopularProducts/PopularProducts";

function Hotdeals() {
  const [timer, setTimer] = useState({
    days: 5,
    hours: 0,
    minutes: 20,
    seconds: 0,
  });

  // Timer logic using useEffect
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        let { days, hours, minutes, seconds } = prevTimer;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(countdown);
                // Timer has ended, perform necessary actions
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <>
      {/* Popular Categories Title and View All */}
      <div className="viewAllAndTitle">
        <div className="title">
          <h2>Hot Deals</h2>
        </div>
        <Link className="LogoMain" to="/categories">
          <div className="ViewAll">View All  <FontAwesomeIcon icon={faArrowRight} /></div>
        </Link>
      </div>

      {/* Main Hotdeals Section */}
   
      <div>

    <div class="angry-grid">
    
        <div id={`item-0`}>
            <div className="PopularProducts">
                <div className="popularCategoryImgsection2 d-flex">
                <div className="p-img">
                    
                    <span className="saleoff">Sale 30%</span>
                    <img
                    className="hotdealsOneImage"
                    src={apple}
                    alt="greenapple"
                    />
                    
                    <div className="wishlistAndView d-flex">
                    <div className="wishlist">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="viewimg">
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                    </div>
                </div>

                
                <div className="p-contents offerimageHotdeals d-flex">
                    <div className="p-nameAndprice">
                        <span className="p-name">Chinese cabbage</span>
                        <div className="pricendDiscount">
                            <span className="price">$12.00 </span>
                            <span className="discount line-thr"> $24.00</span>
                        </div>
                        <div className="starimgdata1 d-flex">
                        <img className="star" src={ratingfour} alt="greenapple" />

                            <p className=""> (524 Feedback)</p>
                        </div>
                    </div>
                    <div className="timerbutton d-flex">
                        <p>Hurry up! Offer ends In:</p>
                        <div className="timerdateandtime d-flex">
                            <div className="offertime">
                                <span>{timer.days}</span>
                                <div>Days</div>
                            </div>
                            <div className="offertime">
                                <span>{timer.hours} </span>
                                <div>Hours</div> 
                            </div>
                            <div className="offertime">
                                <span>{timer.minutes} </span>
                                <div>Minutes</div> 
                            </div>
                            <div className="offertime">
                                 <span>{timer.seconds}</span>
                                <div>seconds</div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    {Data.slice(1, 12).map((allprod, index) => (
        <div id={`item-${index+1}`}>
        <PopularProducts i={index} key={index} Data={allprod} />

        </div>
      ))}
</div>


        </div>
    </>
  );
}

// Component for Product Section
function ProductSection() {
  return (
    <div className="PopularProducts">
      <div className="popularCategoryImgsection2 d-flex">
        <div className="p-img">
          {/* Sale Information and Product Image */}
          <span className="saleoff">Sale 30%</span>
          <img className="hotdealsOneImage" src={apple} alt="greenapple" />

          {/* Wishlist and View Icons */}
          <div className="wishlistAndView d-flex">
            <div className="wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="viewimg">
              <FontAwesomeIcon icon={faEye} />
            </div>
          </div>
        </div>

        {/* Product Contents */}
        <div className="p-contents d-flex">
          <div className="p-nameAndprice">
            {/* Product Name, Price, Discount, and Star Rating */}
            <span>Chinese cabbage</span>
            <div>
              <span className="price">$12.00</span>{" "}
              <span className="discount line-thr">$24.00</span>
            </div>
            <img className="star" src={ratingfour} alt="greenapple" />
          </div>

          {/* Cart Button */}
          <div className="cartButton">
            <span>
              <FontAwesomeIcon className="cartsvg" icon={faShoppingBag} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotdeals;



{/* <div className="Hotdealssec HotdealsecfirstImg d-flex">
<div className="offersec">
  
  <div className="PopularProducts">
    <div className="popularCategoryImgsection2 d-flex">
      <div className="p-img">
        
        <span className="saleoff">Sale 30%</span>
        <img
          className="hotdealsOneImage"
          src={apple}
          alt="greenapple"
        />
        
        <div className="wishlistAndView d-flex">
          <div className="wishlist">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="viewimg">
            <FontAwesomeIcon icon={faEye} />
          </div>
        </div>
      </div>

     
      <div className="p-contents offerimageHotdeals d-flex">
        <div className="p-nameAndprice">
          
          <span>Chinese cabbage</span>
          <div>
            <span className="price">$12.00</span>{" "}
            <span className="discount line-thr">$24.00</span>
          </div>
          <img className="star" src={ratingfour} alt="greenapple" />
        </div>

       
        <div className="timerbutton">
          <span>
            {timer.days}d {timer.hours}h {timer.minutes}m{" "}
            {timer.seconds}s
          </span>
        </div>
      </div>
    </div>
  </div>
  
  <div className="d-flex">
    <ProductSection />
    <ProductSection />
  </div>
</div>



<div className="nonoffersec">
  <Hotdealright />
</div>
</div> */}