import WishlistItems from './WishlistItems';
import Header from "../header/Header";
import FootersecAll from "../footer/FooterSectionAll";
import Breadcrums from "../Breadcrums";
import { GoHome } from "react-icons/go";

function AllCartProducts() {

    return(
        <>
        <Header/>
        <Breadcrums data={[<GoHome className='white'/>,' > Wishlist ']}/>
          <WishlistItems/>
        <FootersecAll/>
        </>
    )
}

export default AllCartProducts;