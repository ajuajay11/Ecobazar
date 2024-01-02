import PopularCategory from "./PopularCategory";
import PopularCategoryItems from "./PopularCategoryItems";


function PopularCategoryAll(){
    let caterogyAll = PopularCategoryItems.map((items, index) => (
        <PopularCategory key={index} dataCollections={items} />
      ));
    
      return <div className="popularCategoryAllsection grid-container d-flex">{caterogyAll}</div>;

}
export default PopularCategoryAll;