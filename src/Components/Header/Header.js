import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/orderReview">Order Review</CustomLink>
                <CustomLink to="/grandpa">Grandpa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;