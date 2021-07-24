import React from 'react';
import logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-top grid">
                <div className=" navbar-left">
                    <ul className="flex left-list">
                        <img src={logo} className="logo" alt="" />
                        <li className="pointer" >Browse</li>
                        <li className="pointer" >Library</li>
                        <li className="active-button pointer">Home</li>
                    </ul>
                </div>
                <div className="flex navbar-right">
                    <input type="text" placeholder="&#61442;  Search"  name="search" id="search" />
                    <li id="account">John Doe</li>
                </div>
            </div>
        </div>
    )
}

export default Navbar
