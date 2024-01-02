import FeaturedProducts from './FeaturedProducts'
import React from 'react';

function AllFeatureProduct(){
    return(
        <div className="PopularSection">
            <div className="viewAllAndTitle">
                <div className="title"><h2>Featured products</h2> </div>
                <div className="ViewAll">View All</div>
            </div>
            <div className="">
              <FeaturedProducts />
            </div>
        </div>  
    )
}
export default AllFeatureProduct;