import React from "react";
import HeroMain from "./HeroMain";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import offertwoimg from './../images/offertwoimg.png'
import offeroneimg from "./../images/offeroneimg.png"; 
import BannarBig from './../images/BannarBig.png'

function Hero() {
    return(
        <div className="Hero d-flex">
            {/* hero image section */}
            <div class="container d-flex">
            <div className=" organicAll d-flex">
            <img className="" src={BannarBig} />
                <div className="OrganicFood">
                    
                    <h1 className="FreshAndHealthy">Fresh & Healthy Organic Food</h1>
                        <div className="OrganicFoodcontents d-flex">
                            <div className="OrganicFoodcontentssection">
                                <span className="Saleupto">Sale up to</span> <span className="percentageoff">30% OFF</span>
                            </div>
                            <p className="Freeshipping">Free shipping on all your order.</p>
                        </div>
                    <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                    
            </div>
                <div className="offer d-flex">
                    <div className="offer_summerSaleAll righttop d-flex">
            <img className="" src={offeroneimg} />
                        <div className="offer_summerSale">
                        <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>

                        </div>
                    </div>
                    <div className="offer_SpecialProduct d-flex">
            <img className="" src={offertwoimg} />
            <div className="offer_summerSale">
            <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>

                        </div>
                    </div>
                </div>

        </div>
            <div className="HeroSection d-flex">

                
            </div>

            {/* delivey steps */}
            <div className="shippingmaincontent d-flex">
                <HeroMain/>
            </div>

        </div>
        
    )
}
export default Hero;