import React from 'react';
import './LoadingSpinner.scss'
const LoadingSpinner = () => {
    return (
        <>
            <div className="spinner">
                <div className="loading loading--full-height"></div>
            </div>
        </>
    );
};

export default LoadingSpinner;