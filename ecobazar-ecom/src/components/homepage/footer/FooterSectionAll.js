import FooterContent from './FooterContent';

function FooterSection_All(){
    return(
    <div className="d-flex FooterSectionComp p-l-r">
        <div className="footersecAll d-flex">
            <div className="Logo_section">
                    <span className="">logo</span>
                    <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <div><span>(219) 555-0114</span><span> or </span><span>Proxy@gmail.com</span></div>
            </div>
            <div className="FooterlistComp d-flex">
                {FooterContent} 
            </div>
        </div>
        <div className="CopyrightSection d-flex s-btw">
            <span>Ecobazar eCommerce © 2021. All Rights Reserved</span>
            <span>Ecobazar eCommerce © 2021. All Rights Reserved</span>
        </div>
       
    </div>
    )

}
export default FooterSection_All;