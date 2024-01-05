import { Link } from "react-router-dom";


function Breadcrums ({data}) {
    return(
       <div className="breadcrumsbg">
        <div className=" mx-w-1300">
        {data.map((d,i)=>(
                i==0?<Link to='/'>{d}</Link>:<span className="">{d}</span>
            ))}     
        </div>
                   
       </div>
    )
}

export default Breadcrums;