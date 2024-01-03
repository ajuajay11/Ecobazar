import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faArrowRight} from '@fortawesome/free-solid-svg-icons';

function LatestNews(props){
return(
        <div className="Blogs">
            <div className="BlogImg">
                <img className="" src={props.newblogDatas.img} alt="Blog"/>
            </div>
            <div className="food-section">
                <div className="comments">
                    <div className="food"><FontAwesomeIcon className="comments_icon" icon={faTag} /> Food</div>
                    <div className="Admin"><FontAwesomeIcon className="comments_icon" icon={faTag} /> My Admin</div>
                    <div className="Comments"><FontAwesomeIcon className="comments_icon" icon={faTag} /> 65 Comments</div>
                </div>
                <div className="blogcontent">
                    <p className="">{props.newblogDatas.text}</p>
                    <div className="SpecialProduct d-flex">
                       <button className="Shopnow"> Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                   </div>
                </div>
            </div>
        </div>

)
}
export default LatestNews;