import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";

function PopularProducts(props) {
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

  const handlecart = (data) => {
    let existingData = cart.find((d) => d.id === data.id);
    if (existingData) {
      dispatch(removeFromCart(data));
    } else {
      dispatch(addToCart(data));
    }
  };
  const handleWish = (data) => {
    let existingData = cart.find((d) => d.id === data.id);
    if (existingData) {
      dispatch(removeFromWishlist(data));
      console.log("click working wish exist");
    } else {
      dispatch(addToWishlist(data));
    console.log("click working wish nnot exist");
    }
  };

  return (
    <div className="PopularProducts d-flex">
      <div className="popularCategoryImgsection2 d-flex">
        <div className="p-img">
          <span className="saleoff">{props.Data.offer}</span>
          <img className="" src={props.Data.pimg} alt="greenapple" />
          <div className="wishlistAndView d-flex">
            <div className={`wishlist ${(wish?.find((d) => d.id === props.Data.id))?'green':'white'}`}>
              <FontAwesomeIcon className=""
  icon={faHeart} onClick={()=>handleWish(props.Data)} />
            </div>
            <div className="viewimg">
              <FontAwesomeIcon icon={faEye} />
            </div>
          </div>
        </div>
        <div className="p-contents d-flex">
          <div className="p-nameAndprice">
            <span>{props.Data.pname}</span>
            <div>
              <span className="price">{props.Data.price}</span>{" "}
              <span className="discount line-thr">{props.Data.price}</span>
            </div>
            <img className="star" src={props.Data.starImg} alt="greenapple" />
          </div>
          <div className="cartButton">
            <span>
                {/* {console.log((cart?.find((d) => d.id === props.Data.id))?'green':'white')} */}
              <FontAwesomeIcon
                className={`cartsvg ${(cart?.find((d) => d.id === props.Data.id))?'green':'white'}`}
                icon={faShoppingBag}
                onClick={() => handlecart(props.Data)}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopularProducts;
