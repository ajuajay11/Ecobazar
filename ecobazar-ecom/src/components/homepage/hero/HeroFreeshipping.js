import React from "react";

function HeroFreeshipping(props) {
    
    return(
        <div className="Delivery_section">
            <div className="icon">{props.heroAllSection.icon}</div>
            <div className="Delivery_section_text">
                <span className="shipping">{props.heroAllSection.content}</span>
                <span className="shipping">{props.heroAllSection.text}</span>
            </div>
        </div>
    )
}
export default HeroFreeshipping;