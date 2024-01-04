import FooterContent from './FooterContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FaInstagram,FaPinterestP,FaTwitter,FaFacebookF } from "react-icons/fa";
import Pay from './../homepage/images/Pay.png'
import { Link } from "react-router-dom";
import FooterLogo from './../homepage/images/FooterLogo.png'

function FooterSection_All(){
    return(
        <div className="footerandNewsletter ">

            <div className="Newsletter d-flex mx-w-1300">
                <div className="NewsletterContentsec">
                    <h2 className="SubcribeourNewslettertitle">Subcribe our Newsletter</h2>
                    <p className="SubcribeourNewsletterpara">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div className="Subscribesec d-flex">
                <div className="input d-flex">
                        <div className="inputWithicon">
                        <FontAwesomeIcon className="searchbox" icon={faMagnifyingGlass} />
                           <input type="text" placeholder="Your email address"/>
                        </div>
                       <button className="Submit">Subscribe</button>
                    </div>
                    <div className="socialiconsAll d-flex">
                        <div className="socialicons d-flex"><FaInstagram className='fa' /></div>
                        <div className="socialicons d-flex"><FaTwitter className='fa' /></div>
                        <div className="socialicons d-flex"><FaPinterestP className='fa' /> </div>
                        <div className="socialicons d-flex"><FaFacebookF className='fa' /></div>
                    </div>
                </div>
            </div>

            <div className="d-flex FooterSectionComp ">
                <div className=" footertopandbottom d-flex">
                <div className="footersecAll mx-w-1300 d-flex">
                    <div className="FooterLogo_section d-flex">
                    <Link className="LogoMain" to="/">
                    <img width="200px" className="" src={FooterLogo} />
                    </Link>
                            
                            <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                            <div className='numberandemail d-flex'><span className='lineunder'>(219) 555-0114</span> <span> or </span> <span className='lineunder'>Proxy@gmail.com</span></div>
                    </div>
                    <div className="FooterlistComp d-flex">
                        {FooterContent} 
                    </div>
                </div>
                <div className="CopyrightSection d-flex s-btw">
                    <span>Ecobazar eCommerce © 2021. All Rights Reserved</span>
                    <img className="" src={Pay} />
                </div>
                </div>
                
                </div>
                
       
        </div>
    
    )

}
export default FooterSection_All;