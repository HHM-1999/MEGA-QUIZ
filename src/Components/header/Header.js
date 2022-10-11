import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='d-flex  justify-content-between border-2 shadow-lg mt-4 p-2'>
                <h1>Mega Quiz</h1>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link" >Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/staticties" className="nav-link" >Staticties</Link>
                    </li>

                </ul>

            </div>
        </div>





    );
};

export default Header;