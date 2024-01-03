import PopularCategoryAll from "./PopularCategoryAll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

function PopularSection(){
    return(
        <div className="PopularSection d-flex">
            <div className="viewAllAndTitle">
                <div className="title"><h2>Popular Categories</h2> </div>
                <div className="ViewAll">View All  <FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
            <PopularCategoryAll/>
        </div>  
    )
}
export default PopularSection;