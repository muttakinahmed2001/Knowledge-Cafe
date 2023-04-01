import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div><h1>Knowledge Cafe</h1></div>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;