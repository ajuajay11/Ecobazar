import Data from './../../Data/Data'
import PopularProducts from './PopularProducts';

function PopularPropSec() {
    let SomeOftheProduct = Data.slice(0, 10).map((allprod, index) => (
      <PopularProducts key={index} Data={allprod} />
    ));
  
    return <div className="PopularProductSection">{SomeOftheProduct}</div>;
  }

export default PopularPropSec;