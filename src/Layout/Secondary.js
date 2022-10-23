import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Layout.css"


const Secondary = () => {
    return (
        <div className='secondary-bg'>
            <Outlet></Outlet>
        </div>
    );
};

export default Secondary;