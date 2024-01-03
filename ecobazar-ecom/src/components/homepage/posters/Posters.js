import posterone from './../images/BannarOne.png'
import postertwo from './../images/Bannartwo.png'
import posterthree from './../images/Bannerthree.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Posters(){
return(
    <div className="PostersSection d-flex">
        <div className="posters">
            <img className="" src={posterone} />
            <div className="SpecialProduct d-flex">
                <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
        <div className="posters">
        <img className="" src={postertwo} />
        <div className="SpecialProduct d-flex">
            <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        </div>
        <div className="posters">
            <img className="" src={posterthree} /> 
            <div className="SpecialProduct d-flex">
                <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
            </div>
    </div>
)
}

export default Posters;