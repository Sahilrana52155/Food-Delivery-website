import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import { StoreContext } from '../context/storecontext';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("Home");
    const {getTotalCartAmount}=useContext(StoreContext)
    return (
        <div className='navbar'>
           <Link to='/'> <img src={assets.logo} alt="Logo" className='logo' /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                <a href='#exploremenu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile App</a>
                <a href='#footer' onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="Search Icon" />
                <div className='navbar-icons'>
                    <Link to='/Cart' > <img src={assets.basket_icon} alt="Basket Icon" /></Link>
                    <div className={`navbar-icon ${getTotalCartAmount() === 0 ? "" : "dot"}`}></div>

                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
