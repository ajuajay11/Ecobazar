import PopularPropSec from './PopularPropSec';
import React from 'react';

function MainPopularProduct(){
    return(
        <div className="PopularSection">
            <div className="viewAllAndTitle">
                <div className="title"><h2>Popular products</h2> </div>
                <div className="ViewAll">View All</div>
            </div>
            <div className="">
              <PopularPropSec />
            </div>
        </div>  
    )
}
export default MainPopularProduct;