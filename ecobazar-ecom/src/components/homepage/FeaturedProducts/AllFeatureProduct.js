import FeaturedProducts from './FeaturedProducts'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

function AllFeatureProduct(){
    return(
        <div className="PopularSection">
           <div className="viewAllAndTitle">
                <div className="title"><h2>Popular Categories</h2> </div>
                <div className="ViewAll">View All  <FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
            <div className="">
              <FeaturedProducts />
            </div>
        </div>  
    )
}
export default AllFeatureProduct;