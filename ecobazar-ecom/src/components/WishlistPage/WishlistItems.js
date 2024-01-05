import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaInstagram, FaPinterestP, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faBagShopping, faPhone, faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  removeFromCart,
  addCartCount,
  removeCartCount,
} from "../../redux/action";

const Wishlistitems = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const wishState = useSelector((state) => state.wishlist);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  // const [total, setTotal] = useState()
  useEffect(() => {
    setCart(cartState);
    setWish(wishState);
    // handleTotal();
  }, [cartState, wishState]);

  return (



    <div class="cart-container mx-w-1300">
      <div class="ShoppingCart">
        <h1 class="carttitle">My Shopping Cart</h1>
        <div className="tablerowcart">
          <div class="shoppingcartlist">
            <table id="shoppingcart">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>STOCK STATUS</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {wish.map((item, index) => (
                  <tr key={index}>
                    <td className=" d-flex"><img className="" src={item.pimg} />{item.pname}</td>
                    <td>{item.price}</td>
                    <td>
                      <div className="countercart">
                        {item.offer}
                      </div>
                    </td>
                    <td>${(Number(item.price.replace(/\$/g, "")) * item.count).toFixed(2)}
                    </td>
                    <td><span className="removeprodcart" onClick={() => dispatch(removeFromWishlist(item))}>X</span></td>

                  </tr>
                ))}
              </tbody>

            </table>
            <div class=" d-flex s-btw checkout-buttons">

              <div className="socialiconsAll d-flex">
                <div> Share : </div>
                <div className="socialicons d-flex"> <FaInstagram className='fa' /></div>
                <div className="socialicons d-flex"><FaTwitter className='fa' /></div>
                <div className="socialicons d-flex"><FaPinterestP className='fa' /> </div>
                <div className="socialicons d-flex"><FaFacebookF className='fa' /></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>



    //             <div class="cart-container">
    //   <div class="ShoppingCart product-card">
    //     <h1 class="carttitle">My Shopping Cart</h1>
    //     <div class="shoppingcartlist">
    //       <table id="shoppingcart">
    //         <tbody>
    //           {cart.map((item, index) => (
    //             <tr key={index}>
    //               <td>{item.id}</td>
    //               <td>{item.price}</td>
    //               <td>
    //                 <span onClick={() => dispatch(addCartCount(item))}>+</span>
    //               </td>
    //               <td>{item.count}</td>
    //               <td>
    //                 <span onClick={() => dispatch(removeCartCount(item))}>-</span>
    //               </td>
    //               <td>${(Number(item.price.replace(/\$/g, "")) * item.count).toFixed(2)}</td>
    //               <td onClick={() => dispatch(removeFromCart(item))}>X</td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //     <div class="order-summary">
    //       <div>
    //         Subtotal: <span>{handleTotal()}</span>
    //       </div>
    //       <div>Shipping: free</div>
    //       <div>
    //         Total: <span>{handleTotal()}</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
};


export default Wishlistitems;
