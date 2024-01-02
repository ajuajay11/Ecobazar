import FooterContent from './FooterContent';

function FooterSection_All(){
    return(
        <div className="footerandNewsletter ">
            <div className="Newsletter p-l-r">
                <div className="NewsletterContentsec">
                    <h2 className="SubcribeourNewsletter">Subcribe our Newsletter</h2>
                    <p className="">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                </div>
                <div className="Subscribesec">
                    <form className="">
                        <input className="" type='text' />
                        <button>Submit</button>
                    </form>
                    <div className="socialicons">
                        <div className="">fb in pi tw</div>
                    </div>
                </div>
            </div>

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
            </div>
    
    )

}
export default FooterSection_All;