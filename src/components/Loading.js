// src/components/Loading.js

import React from 'react';
import './Loading.css'; // Keep the loading CSS if you want to add other styles

const Loading = () => {
    return (
        <div className="loading-screen">
            <img src="/loading.gif" alt="Loading..." className="loader" />
        </div>
    );
};


export default Loading;