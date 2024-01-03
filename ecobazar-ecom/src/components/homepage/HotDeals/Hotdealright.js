import PopularProducts from "../PopularProducts/PopularProducts"
import Data from './../../Data/Data'

function Hotdealright() {
    let SomeOftheProduct = Data.slice(0, 9).map((allprod, index) => (
        <PopularProducts key={index} Data={allprod} />
      ));
      return(
        <div className="PopularProducts">
            <div className="HotdealrightImgsection">
               <div className="Hotdealrightsec">
                  {SomeOftheProduct}
               </div>
            </div>
        </div> 
      )
}
export default Hotdealright;

