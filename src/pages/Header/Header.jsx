import React from 'react';
import TopNavbar from './TopNavbar';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className=' text-white '>
            <TopNavbar></TopNavbar>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;