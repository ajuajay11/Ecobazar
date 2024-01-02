import PopularProducts from "../PopularProducts/PopularProducts"
import Data from './../../Data/Data'

function FeaturedProducts() {
    let SomeOftheProduct = Data.slice(4, 9).map((allprod, index) => (
        <PopularProducts key={index} Data={allprod} />
      ));

     return(
        <div className="PopularProducts">
            <div className="popularCategoryImgsection">
                
               <div className="PopularProductSection">
                {SomeOftheProduct}
               </div>
            </div>
        </div>
        
    )
}
export default FeaturedProducts