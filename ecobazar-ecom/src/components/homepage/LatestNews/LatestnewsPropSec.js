import LatestNews from "./LatestNews";
import BlogData from "./BlogData"; // Corrected import name

function LatestnewspropSec(){

    let newBlogsection = BlogData.map((blogdata, index)=>(

        <LatestNews key={index} newblogDatas={blogdata}/>
    ))

    return <div className="d-flex">{newBlogsection}</div>

}
export default LatestnewspropSec;