import React from "react";
import companylogo from './../images/Vector.png'
import tomato from './../images/InstagramPost.png'

let companyLogoss=[
    {
    img:companylogo
    },
{
    img:companylogo
}
,{
    img:companylogo
}]

let Instagram=[{instaimg:tomato},{instaimg:tomato},{instaimg:tomato}]

function Followus(){
return(
    <div className="Followsus_dblsec">
        <div className="Companylogos">
            {companyLogoss.map((logocomp)=>(
              <img className="" src={logocomp.img} />
            ))}
        </div>
        <div className="followUsonInstagrssm">
            <h1 className="Followus">Follow us on Instagram</h1>
            {Instagram.map((insta)=>(
                <div className="instaimges">
                   <img className="" src={insta.instaimg} />
                   <span className="hide">hide</span>
               </div>
            ))}
            
        </div>
    </div>
)
}


export default Followus;