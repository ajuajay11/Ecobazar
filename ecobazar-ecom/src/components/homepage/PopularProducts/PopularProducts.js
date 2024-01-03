import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag,faHeart,faEye} from '@fortawesome/free-solid-svg-icons';

function PopularProducts(props) {
    return(
        <div className="PopularProducts d-flex">
            <div className="popularCategoryImgsection2 d-flex">
                <div className="p-img">
                    <span className="saleoff">{props.Data.offer}</span>
                    <img className="" src={props.Data.pimg} alt="greenapple"/>
                    <div className="wishlistAndView d-flex">
                        <div className="wishlist">
                        <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className="viewimg">
                        <FontAwesomeIcon icon={faEye} />
                        </div>
                    </div>
                </div>
                <div className="p-contents d-flex">
                    <div className="p-nameAndprice">
                        <span>{props.Data.pname}</span>
                        <div><span className="price">{props.Data.price}</span> <span className="discount line-thr">{props.Data.price}</span></div>
                        <img className="star" src={props.Data.starImg} alt="greenapple"/>
                    </div>
                    <div className="cartButton">
                        <span><FontAwesomeIcon className="cartsvg" icon={faShoppingBag} /></span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default PopularProducts;