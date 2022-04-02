import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome to T-Shirt Mania</h1>
            <nav className=''>
                <Link to='/home'>Home</Link>
                <Link to='/orderReview'>Order Review</Link>
                <Link to='/grandpa'>Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;