import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faMagnifyingGlass,faBagShopping,faPhone,faHeart,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from './../homepage/images/Logo.png'

function Header(){

    return (
        <div className="HeadersectionAll">

            {/* headertop section */}
            
            <div className="HeaderTopSection d-flex s-btw p-l-r">
                <div className="HeaderTopSection_location ">
                    <span className="Storeocation"><FontAwesomeIcon icon={faLocationDot} /> Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                </div>
                <div className="HeaderTopSection_signup d-flex">
                    <div className="Languages">
                        <select className="">
                            <option>Eng</option>
                        </select>
                        <select className="">
                            <option>USD</option>
                        </select>
                    </div>
                    <div className="line"> | </div>
                    <div className="SignupAndSignIn">
                        <div> <span> Sign in</span> / <span>Sign Up</span></div>
                    </div>
                </div>
            </div>

            {/* header section */}

            <div className="HeaderSection d-flex s-btw p-l-r">
                <div className="HeaderSection_Logo d-flex">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="input d-flex">
                        <div className="inputWithicon">
                        <FontAwesomeIcon className="searchbox" icon={faMagnifyingGlass} />
                           <input type="text" placeholder="Search"/>
                        </div>
                       <button className="Submit">Submit</button>
                    </div>
                </div>
                <div className="HeaderSection_CartButton d-flex">
                    <div className="wishlist"><FontAwesomeIcon icon={faHeart} /></div> 
                    <div className="line"> | </div>
                    <div className="cart">
                        <div className="cartcounter">
                           <FontAwesomeIcon icon={faBagShopping} />
                           <span className="counter">0</span>
                        </div>
                    </div>
                    <div className="carttexts d-flex">
                            <span className="">Shopping Cart</span>
                            <span className="price">$0.00</span>
                    </div>
                </div>
            </div>

            {/* navigation section */}
            <div className="Navigation_section d-flex s-btw p-l-r">
                <div className="Navigation">
                    <ul className="nav d-flex">
                        <li className="active">Home <FontAwesomeIcon icon={faChevronDown} /></li>
                        <li>Shop <FontAwesomeIcon icon={faChevronDown} /></li>
                        <li>Pages <FontAwesomeIcon icon={faChevronDown} /></li>
                        <li>Blog <FontAwesomeIcon icon={faChevronDown} /></li>
                        <li>About Us <FontAwesomeIcon icon={faChevronDown} /></li>
                        <li>Contact Us <FontAwesomeIcon icon={faChevronDown} /></li>
                    </ul>
                </div>
                <div className="PhoneNumber">
                    <span><FontAwesomeIcon icon={faPhone} /> (219) 555-0114 </span>
                </div>
            </div>
        </div>
    )
}
export default Header;