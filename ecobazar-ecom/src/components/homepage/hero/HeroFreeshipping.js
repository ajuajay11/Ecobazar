import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let style={
    color: '#00B207', 
    fontSize: '20px'
}

function HeroFreeshipping(props) {
    
    return(
        <div className="Delivery_section d-flex">
            <div className="icon d-flex"><FontAwesomeIcon style={style} icon={props.heroAllSection.icon} /></div>
            <div className="Delivery_section_text">
                <h1 className="shipping">{props.heroAllSection.text}</h1>
                <p className="shipping">{props.heroAllSection.content}</p>
            </div>
        </div>
    )
}
export default HeroFreeshipping;