import React from "react";
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <p className="nav__item">Lo mejor para tu mundo virtual!</p>
                </div>
                <ul className="nav__ul">
                    <li className="nav__li">
                        <NavLink className="nav__a" to="/">Home</NavLink>
                    </li>
                    <li className="nav__li">
                        <NavLink className="nav__a" to="/aboutus">About Us</NavLink>
                    </li>
                    <li className="nav__li">
                        <NavLink className="nav__a" to="/shop">Shop</NavLink>
                    </li>
                    <li className="nav__li">
                        <NavLink className="nav__cart" to="cart">
                        <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;