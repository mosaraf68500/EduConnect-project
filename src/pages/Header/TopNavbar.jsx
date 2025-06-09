import React from 'react';

const TopNavbar = () => {
    return (
        <div className='flex justify-between items-center  bg-gray-800 py-3 px-8'>
            <div>
                <p>Welcome to <span>EduConnect </span>- Unlocking the Power of Education!</p>
            </div>
            <div className='flex gap-4'>
                <div>
                    <button className=''>Login</button>
                </div>
                <div>
                    <button className=''>Register</button>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;