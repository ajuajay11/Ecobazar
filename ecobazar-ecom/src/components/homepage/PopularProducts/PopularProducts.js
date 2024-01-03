import React from "react";

function PopularProducts(props) {
    return(
        <div className="PopularProducts">
            <div className="popularCategoryImgsection2">
                <div className="p-img">
                    <span className="saleoff">{props.Data.offer}</span>
                    <img className="" src={props.Data.pimg} alt="greenapple"/>
                </div>
                <div className="p-contents">
                    <div className="p-nameAndprice">
                        <span>{props.Data.pname}</span>
                        <div><span className="price">{props.Data.price}</span> <span className="discount">{props.Data.price}</span></div>
                        <span className="star">{props.Data.star}</span>
                    </div>
                    <div className="cartButton">
                        <span>Cart</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default PopularProducts;