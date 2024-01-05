import Header from "../header/Header";
import FooterSection_All from "../footer/FooterSectionAll";
import CheckoutItems from "./CheckoutItems";
import Breadcrums from "../Breadcrums";
import { GoHome } from "react-icons/go";


function checkout() {
    return(
        <>
        <Header/>
        <Breadcrums data={[<GoHome className='white'/>,' > Checkout  ']}/>

          <CheckoutItems/>
        <FooterSection_All/>
        </>
    )
}

export default checkout;