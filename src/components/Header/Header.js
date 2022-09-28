import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar bg-light'>
            <div className='container'>
                <a className = 'navbar-brand' href="/navbar">
                    Gym Activity
                </a>
            </div>
        </nav>
        
    );
};

export default Header;