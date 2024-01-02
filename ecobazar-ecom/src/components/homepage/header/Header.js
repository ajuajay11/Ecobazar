import React from "react";


function Header(){

    return (
        <div className="HeadersectionAll">

            {/* headertop section */}
            <div className="HeaderTopSection d-flex s-btw p-l-r">
                <div className="HeaderTopSection_location">
                    <span className="Storeocation">Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
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
                    <div className="SignupAndSignIn">
                        <div> <span>Sign in</span> / <span>Sign Up</span></div>
                    </div>
                </div>
            </div>

            {/* header section */}

            <div className="HeaderSection d-flex s-btw p-l-r">
                <div className="HeaderSection_Logo d-flex">
                    <div className="logo">
                        <img src="" alt="logo"/>
                    </div>
                    <div className="input">
                       <input className="" type="text" placeholder="enter"/>
                       <input type="submit" />
                    </div>
                </div>
                <div className="HeaderSection_CartButton">
                    <span className="">@</span> <span>| </span>
                    <span className="">Cart</span>
                </div>
            </div>

            {/* navigation section */}
            <div className="Navigation_section d-flex s-btw p-l-r">
                <div className="Navigation">
                    <ul className="nav d-flex">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="PhoneNumber">
                    <span>@ (219) 555-0114 </span>
                </div>
            </div>
        </div>
    )
}
export default Header;