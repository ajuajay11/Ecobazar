import PopularCategoryAll from "./PopularCategoryAll";

function PopularSection(){
    return(
        <div className="PopularSection p-l-r">
            <div className="viewAllAndTitle">
                <div className="title">Popular Categories </div>
                <div className="ViewAll">View All</div>
            </div>
            <PopularCategoryAll/>
        </div>  
    )
}
export default PopularSection;