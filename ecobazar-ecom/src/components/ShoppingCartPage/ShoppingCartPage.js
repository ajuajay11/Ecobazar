import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

const ShoppingCartPage = () => {
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

  const handleTotal = () => {
    return cart
      .reduce(
        (accumulator, currentValue) =>
          accumulator +
          Number(currentValue.price.replace(/\$/g, "")) * currentValue.count,
        0
      )
      .toFixed(2);
  };
  return (
    <div class="cart-container mx-w-1300">
      <div class="ShoppingCart">
        <h1 class="carttitle">My Shopping Cart</h1>
        <div className="tablerowcart d-flex">
          <div class="shoppingcartlist">
            <table id="shoppingcart">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>SUBTOTAL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td className=" d-flex"><img className="" src={item.pimg} /><span className="">{item.pname}</span></td>
                    <td>{item.price}</td>
                    <td>
                      <div className="countercart">
                        <span onClick={() => dispatch(removeCartCount(item))}> - </span>
                        {item.count}
                        <span onClick={() => dispatch(addCartCount(item))}> + </span>
                      </div>


                    </td>
                    <td>${(Number(item.price.replace(/\$/g, "")) * item.count).toFixed(2)}
                    </td>
                    <td><span className="removeprodcart" onClick={() => dispatch(removeFromCart(item))}>X</span></td>

                  </tr>
                ))}
              </tbody>

            </table>
            <div class=" d-flex s-btw checkout-buttons">

              <div className="returntoshop">
                <Link className="LogoMain" to='/categories'>
                  <button>Return to shop</button>

                </Link>
              </div>
              <div className="coupon input d-flex">
                <div className="inputWithicon">
                  <input type="text" placeholder="Enter the code" />
                </div>
                <button className="Submit">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div class="order-summary">
            <div className="ordersumsub">
              <h2 className=" linethroughcategory">Cart Total</h2>
              <div class="subtotal linethroughcategory d-flex s-btw">
                <span>Subtotal:</span> <span>${handleTotal()}</span>

              </div>
              <div class="shipping linethroughcategory d-flex s-btw"><span className="">Shipping: </span><span className=""> Free</span></div>
              <div class="total d-flex s-btw">
                <span>Total:</span><span>${handleTotal()}</span>
              </div>
              <div className="checkout-buttons">
                <Link className="LogoMain" to='/checkout'>
                <button className="checkout-buttons">Proceed to Checkout</button>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

  );
};


export default ShoppingCartPage;
