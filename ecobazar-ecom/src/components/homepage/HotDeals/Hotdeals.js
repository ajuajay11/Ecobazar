import Hotdealright from "./Hotdealright";
import apple from './../images/Apple.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Hotdeals() {
    return(
        <>
        <div className="viewAllAndTitle">
                <div className="title"><h2>Popular Categories</h2> </div>
                <div className="ViewAll">View All  <FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
        <div className="Hotdealssec d-flex">
            
            <div className="offersec">
               <div className="offersec_top">
                  <img className="" src={apple} />

                </div> 
                <div className="offerbottom d-flex">
                    <div className="offerbottomimgone">
                        <img className="" src={apple} />
                    </div>
                    <div className="offerbottomimgone">
                       <img className="" src={apple} />
                    </div>
                </div>
            </div>
            <div className="nonoffersec">
                <Hotdealright/>
            </div>

        </div>
        </>
        
    )
}

export default Hotdeals;