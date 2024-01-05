import ShoppingCartPage from "./ShoppingCartPage";
import Header from "../header/Header";
import FootersecAll from "../footer/FooterSectionAll";
import Breadcrums from "../Breadcrums";
import { GoHome } from "react-icons/go";

function AllCartProducts() {

    return(
        <>
        <Header/>
        <Breadcrums data={[<GoHome className='white'/>,' > Shopping Cart ']}/>
          <ShoppingCartPage/>
        <FootersecAll/>
        </>
    )
}

export default AllCartProducts;