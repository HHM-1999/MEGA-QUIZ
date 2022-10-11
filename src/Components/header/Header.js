import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className=' navigation container d-flex border-2 shadow-lg mt-3  p-2 '>
                <div>
                    <h2 >Mega Quiz Contest</h2>
                </div>
                <div className='list p-2 justify-content-end '>
                    <Link to='/'>Home</Link>


                    <Link to='/blog'>Blog</Link>
                    <Link to='/staticties'>Staticties</Link>

                </div>

            </nav>

        </div>


    );
};

export default Header;