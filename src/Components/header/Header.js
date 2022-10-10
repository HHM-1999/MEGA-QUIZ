import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className=' navigation container d-flex g-5 border-2 shadow-lg mt-3 p-2 '>
            <div>
                <h2>Mega Quiz</h2>
            </div>  
            <div className='list p-2'>
                <Link to='/home'>Home</Link>
                <Link to='/home'>Topics</Link>
                <Link to='/home'>Statictis</Link>
                <Link to='/home'>Blog</Link>
                
                </div>
              
         

        </nav>
    );
};

export default Header;