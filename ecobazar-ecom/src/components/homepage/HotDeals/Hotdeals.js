import Hotdealright from "./Hotdealright";
import apple from './../images/Apple.png'

function Hotdeals() {
    return(
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
    )
}

export default Hotdeals;