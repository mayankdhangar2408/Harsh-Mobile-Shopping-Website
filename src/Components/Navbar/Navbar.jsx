import React, {useContext, useRef, useState} from "react"
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from  '../Assets/nav_dropdown.png'

const Navbar = () => {

    //for changing the nav-menu red underline
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>HARSH MOBILE</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mobiles")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/mobiles'>Mobiles</Link>{menu==="mobiles"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("audio")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/audio'>Audio</Link>{menu==="audio"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("chargers")}}><Link style={{textDecoration: 'none', color: '#626262'}} to='/chargers'>Chargers</Link>{menu==="chargers"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
                <Link style={{textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;