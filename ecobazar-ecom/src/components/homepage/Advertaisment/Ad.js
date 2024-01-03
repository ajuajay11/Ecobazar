import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Ad(){
return(
    <div className="Ad">
        <div className="Ad_img d-flex">
            <div className="d-flex Ad-content">
                <div className="Ad-content_Sumersale">SummerSale</div>
                <div className="Sumersaleoffer">37% <span className="Sumersaleoffer_off">OFF</span></div>
                <div className="Ad-text">Free on all your order, Free Shipping and  30 days money-back guarantee</div>
                <div className="SpecialProduct d-flex">
                   <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
</div>
)
}
export default Ad;