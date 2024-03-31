import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><NavLink to='/' activeClassName="active" className="nav-link">shop</NavLink> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={()=>{setMenu("men")}}><NavLink to='/men' activeClassName="active" className="nav-link">men</NavLink> {menu === "men" ? <hr /> : <></>}</li>
                <li onClick={()=>{setMenu("women")}}><NavLink to='/women' activeClassName="active" className="nav-link">women</NavLink> {menu === "women" ? <hr /> : <></>}</li>
                <li onClick={()=>{setMenu("kids")}}><NavLink to='/kids' activeClassName="active" className="nav-link">kids</NavLink> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>

            <div className="nav-login-cart">
                <button><NavLink to='/login'>Login</NavLink></button>
                <NavLink to='/cart'><img src={cart_icon} alt="" /></NavLink>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
