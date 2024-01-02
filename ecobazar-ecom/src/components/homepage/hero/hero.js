import React from "react";
import HeroMain from "./HeroMain";

function Hero() {
    return(
        <div className="Hero">
            {/* hero image section */}
            <div className="HeroSection d-flex">
                <div className="OrganicFood">
                    <h1 className="FreshAndHealthy">Fresh & HealthyOrganic Food</h1>
                    <span className=""></span>
                    <button className="">Shopnow </button>
                </div>
                <div className="offer">
                    <div className="summerSale">
                        <span className="Sale75">Summer Sale75% OFF</span>
                        <span className="Vegetable">Only Fruit & Vegetable</span>
                    </div>
                    <div className="SpecialProduct">
                        <span className="bestDeal">BEST DEAL</span>
                        <h1 className="DealOfTheMOnth">Special Products Deal of the Month</h1>
                        <button className="">Shop Now</button>
                    </div>
                </div>
            </div>

            {/* delivey steps */}
            <div className="">
                <HeroMain/>
            </div>

        </div>
        
    )
}
export default Hero;