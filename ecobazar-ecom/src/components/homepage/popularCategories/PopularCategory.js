import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from './../../../redux/action';

function PopularCategory(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigation =()=>{
    dispatch(addCategory(props.dataCollections.categoryText))
    navigate("/categories");
  }

    return(
    <div className="popularCategoryImgsection d-flex" onClick={handleNavigation}>
      <img width='100px' className="" src={props.dataCollections.img} alt="Category" />
      <span className="category">{props.dataCollections.categoryText}</span>
    </div>
    )
}

export default PopularCategory;