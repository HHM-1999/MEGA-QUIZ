import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className=' navigation container d-flex border-2 shadow-lg mt-3  p-2 '>
            <div>
                <h2 >Mega Quiz Contest</h2>
            </div>  
            <div className='list p-2 justify-content-end '>
                <Link to='/home'>Home</Link>
                
                
                <Link to='/blog'>Blog</Link>
                <Link to='/home'>Staticties</Link>
                
                </div>

        </nav>
    );
};

export default Header;