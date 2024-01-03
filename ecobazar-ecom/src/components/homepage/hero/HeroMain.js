import Heroitems from "./Heroitems";
import HeroFreeshipping from "./HeroFreeshipping";


function HeroMain() {
    const heroItemsRendered = Heroitems.map((item, index) => (
      <HeroFreeshipping key={index} heroAllSection={item} />
    ));
  
    return <div className="heroItemsRendered d-flex">{heroItemsRendered}</div>;
  };
  
  

export default HeroMain;