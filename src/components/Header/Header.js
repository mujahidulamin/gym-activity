import React from 'react';
import './Header.css'
import logo from '../../images/favicon.png'
const Header = () => {
    return (
        <nav className='navbar bg-light'>
            <div className='container'>
                <a className = 'navbar-brand' href="/navbar">
                <img className='me-2' src= {logo} alt="" />
                    <span className='ms-1 fw-bolder'>Gym Activity</span>
                </a>
            </div>
        </nav>
        
    );
};

export default Header;