import PopularCategoryAll from "./PopularCategoryAll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { addCategory } from "../../../redux/action";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function PopularSection(){
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleNavigation =()=>{
        dispatch(addCategory("allcategory"))
        navigate("/categories");
      }
    return(
        <div className="PopularSection d-flex">
            <div className="viewAllAndTitle">
                <div className="title"><h2>Popular Categories</h2> </div>
                <div className="ViewAll" onClick={handleNavigation}>View All  <FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
            <PopularCategoryAll/>
        </div>  
    )
}
export default PopularSection;