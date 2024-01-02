import PopularProducts from "../PopularProducts/PopularProducts"
import Data from './../../Data/Data'

function Hotdealright() {
    let SomeOftheProduct = Data.slice(4, 13).map((allprod, index) => (
        <PopularProducts key={index} Data={allprod} />
      ));
      return(
        <div className="PopularProducts">
            <div className="popularCategoryImgsection">
                
               <div className="Hotdealrightsec">
                {SomeOftheProduct}
               </div>
            </div>
        </div> )
}
export default Hotdealright;

