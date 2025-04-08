import React from 'react';
import Logo from '../../assets/logo.svg';
import Phone from '../../assets/phone.svg';
import './navbar.component.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Logo} alt='the official key-system logo' className='logo' />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
            <button className="right">
                <img src={Phone} alt='an icon of a phone' className='phone' />
                +234 818 444 1404
            </button>
        </div>
    )
}

export default Navbar