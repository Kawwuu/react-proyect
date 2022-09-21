import React from "react";
import CartWidget from './CartWidget';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <p className="nav__item">Lo mejor para tu mundo virtual!</p>
                </div>
                <ul className="nav__ul">
                    <li className="nav__li">
                        <a className="nav__a" href=".">Home</a>
                    </li>
                    <li className="nav__li">
                        <a className="nav__a" href=".">About Us</a>
                    </li>
                    <li className="nav__li">
                        <a className="nav__a" href=".">Shop</a>
                    </li>
                    <li className="nav__li">
                        <a className="nav__cart" href=".">
                        <CartWidget/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;