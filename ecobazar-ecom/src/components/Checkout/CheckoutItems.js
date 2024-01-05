import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    addToCart,
    addToWishlist,
    removeFromWishlist,
    removeFromCart,
    addCartCount,
    removeCartCount,
} from "../../redux/action";

function CheckoutItems() {
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



        <div class="cart-container checkout mx-w-1300">
            <div class="ShoppingCart">
                <h1 class="carttitle">My Shopping Cart</h1>
                <div className="tablerowcart d-flex">
                    <div className="checkout-container">
                        <h2>Billing Information</h2>
                        <form className="checkout-form">
                            <div className="checkoutform-group d-flex">
                                <div className="form-row">
                                    <div className="half-width">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" className="checkout-input" />
                                    </div>
                                    <div className="half-width">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" className="checkout-input" />
                                    </div>
                                    <div className="half-width">
                                        <label htmlFor="companyName">Company Name (optional)</label>
                                        <input type="text" id="companyName" className="checkout-input" />
                                    </div>
                                </div>
                                <div className="form-row">
                                <div className="half-width">
                                        <label htmlFor="Countryreligion">Country / Religion</label>
                                        <select className="selector">
                                            <option className="">select</option>
                                            <option className="">India</option>
                                            <option className="">Dubai</option>
                                        </select>
                                    </div><div className="half-width">
                                        <label htmlFor="Countryreligion">States</label>
                                        <select className="selector">
                                            <option className="">select</option>
                                            <option className="">kerala</option>
                                            <option className="">mumbai</option>
                                        </select>
                                    </div>
                                    <div className="half-width">
                                        <label htmlFor="companyName">Zip Code</label>
                                        <input type="text" id="companyName" className="checkout-input" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="full-width">
                                        <label htmlFor="streetAddress">Street Address</label>
                                        <input type="text" id="streetAddress" className="checkout-input" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="half-width">
                                        <label htmlFor="firstName">Email</label>
                                        <input type="text" id="firstName" className="checkout-input" />
                                    </div>
                                    <div className="half-width">
                                        <label htmlFor="lastName">Phone Number</label>
                                        <input type="text" id="lastName" className="checkout-input" />
                                    </div>
                                </div>
                                {/* ... Other form fields ... */}
                            </div>

                            <div className="shipping-address">
                                <input type="checkbox" id="shipToDifferentAddress" />
                                <label htmlFor="shipToDifferentAddress">Ship to a different address</label>
                            </div>
                            

                            <div className="d-flex checkoutform-group">
                                <div className="full-width">
                                    <h2 className="">Additional Info</h2>
                                    <label htmlFor="orderNotes">Order Notes (Optional)</label>
                                    <textarea id="orderNotes" className="checkout-textarea"></textarea>
                                </div>
                            </div>


                        </form>
                    </div>
                    <div class="order-summary checkoutorder-summary">
                        <div className="ordersumsub">
                            <h2 className=" linethroughcategory">Order Summery</h2>
                            {cart.map((item, index) => (
                                <div key={index} className="checkoutsubtotal linethroughcategory d-flex s-btw">
                                    <div className="d-flex"><img className="" src={item.pimg} alt={item.pname} /><span>{item.pname}</span> x<span>{item.count}</span></div>
                                    <div className="">${(Number(item.price.replace(/\$/g, "")) * item.count).toFixed(2)}</div>

                                </div>
                            ))}
                            <div class="subtotal linethroughcategory d-flex s-btw">
                                <span>Subtotal:</span> <span>${handleTotal()}</span>

                            </div>


                            <div class="shipping linethroughcategory d-flex s-btw"><span className="">Shipping: </span><span className=""> Free</span></div>
                            <div class="total d-flex s-btw">
                                <span>Total:</span><span>${handleTotal()}</span>
                            </div>
                            <div className="form-groupprice d-flex">
                                <h4>Payment Method</h4>
                                <div className="payment-methods">
                                    <div className="payment-option d-flex gp-5">
                                        <input type="radio" id="cashOnDelivery" />
                                        <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                                    </div>
                                    <div className="payment-option d-flex gp-5">
                                        <input type="radio" id="paypal" />
                                        <label htmlFor="paypal">Paypal</label>
                                    </div>
                                    <div className="payment-option d-flex gp-5">
                                        <input type="radio" id="amazonPay" />
                                        <label htmlFor="amazonPay">Amazon Pay</label>
                                    </div>
                                    <button className="checkout-submit">Place Order</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};


export default CheckoutItems;
