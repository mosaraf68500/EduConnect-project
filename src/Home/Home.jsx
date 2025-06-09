import React from 'react';
import Header from '../pages/Header/Header';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <section className='bg-gradient-to-r from-[#d1ecdb] to-white '>
            <Banner></Banner>
           </section>
        </div>
    );
};

export default Home;