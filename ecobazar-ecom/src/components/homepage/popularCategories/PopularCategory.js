import React from "react";

function PopularCategory(props) {
    return(
      <div className="popularCategoryImgsection">
      <img width='100px' className="" src={props.dataCollections.img} alt="Category" />
      <h1 className="">hello</h1>
      <span className="category">{props.dataCollections.categoryText}</span>
    </div>
    )
}

export default PopularCategory;