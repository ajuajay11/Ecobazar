import PopularCategoryAll from "./PopularCategoryAll";

function PopularSection(){
    return(
        <div className="PopularSection">
            <div className="viewAllAndTitle">
                <div className="title"><h2>Popular Categories</h2> </div>
                <div className="ViewAll">View All</div>
            </div>
            <PopularCategoryAll/>
        </div>  
    )
}
export default PopularSection;