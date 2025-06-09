import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import Header from '../pages/Header/Header';

const RootLayOuts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOuts;