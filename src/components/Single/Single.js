import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SInglePost from '../SInglePost/SInglePost';
import './Single.css';

const Single = () => {
    return (
        <div className="single">
            <SInglePost />
            <Sidebar />
        </div>
    );
};

export default Single;