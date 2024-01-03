import LatestNews from "./LatestNews";
import BlogData from "./BlogData"; // Corrected import name

function LatestnewspropSec(){

    let newBlogsection = BlogData.map((blogdata, index)=>(

        <LatestNews key={index} newblogDatas={blogdata}/>
    ))

    return (
        <div className="d-flex blogdata">
            <div className="latestnewstitle">
                <h1 className="LatestNews">Latest News</h1>
            </div>
            <div className="newBlogsection">
               {newBlogsection}
            </div>
        </div>
    )

}
export default LatestnewspropSec;