import React from "react";
import HeroMain from "./HeroMain";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


function Hero() {
    return(
        <div className="Hero d-flex">
            {/* hero image section */}
            <div className="HeroSection d-flex">
                <div className="OrganicFood d-flex">
                    <h1 className="FreshAndHealthy">Fresh & Healthy Organic Food</h1>
                    <div className="OrganicFoodcontents d-flex">
                        <div className="OrganicFoodcontentssection">
                            <span className="Saleupto">Sale up to</span> <span className="percentageoff">30% OFF</span>
                        </div>
                        <p className="Freeshipping">Free shipping on all your order.</p>
                    </div>
                    <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className="offer d-flex">
                    <div className="offer_summerSale d-flex">
                        <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                    <div className="offer_SpecialProduct d-flex">
                        <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </div>

            {/* delivey steps */}
            <div className="shippingmaincontent d-flex">
                <HeroMain/>
            </div>

        </div>
        
    )
}
export default Hero;