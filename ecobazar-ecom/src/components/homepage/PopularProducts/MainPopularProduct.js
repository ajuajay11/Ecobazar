import PopularPropSec from './PopularPropSec';
import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

function MainPopularProduct(){
    return(
        <div className="PopularSection MainPopularProduct d-flex">
            <div className="viewAllAndTitle">
                <div className="title"><h2>Popular Categories</h2> </div>
                <Link className="LogoMain" to="/categories">
                      <div className="ViewAll">View All  <FontAwesomeIcon icon={faArrowRight} /></div>

                </Link>
            </div>
            <PopularPropSec />
    </div>  
    )
}
export default MainPopularProduct;