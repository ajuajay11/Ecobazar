import posterone from './../images/Poster_One.png'
import postertwo from './../images/Poster_Two.png'
import posterthree from './../images/Poster_Three.png'

function Posters(){
return(
    <div className="PostersSection d-flex">
        <div className="poster1">
            <img className="" src={posterone} />
            <button className="Shopnow">ShopNow</button>
        </div>
        <div className="poster2">
        <img className="" src={postertwo} />
        <button className="Shopnow">ShopNow</button>
        </div>
        <div className="poster3">
        <img className="" src={posterthree} /> 
        <button className="Shopnow">ShopNow</button>
         </div>
    </div>
)
}

export default Posters;