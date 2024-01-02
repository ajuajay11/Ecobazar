import React from "react";

function LatestNews(props){
return(
    <div className="LatestNews">
        <div className="Blogs">
            <div className="BlogImg">
                <img className="" src={props.newblogDatas.img} alt="Blog"/>
              <span className="Date">18 Now</span>
            </div>
            <div className="food">
                <div className="comments">
                    <span className="food"></span>
                    <span className="Admin"></span>
                    <span className="Comments"></span>
                </div>
                <div className="blogcontent">
                    <p className="">{props.newblogDatas.text}</p>
                    <button className="ShopNow">ReadMore </button>
                </div>
            </div>
        </div>

    </div>
)
}
export default LatestNews;