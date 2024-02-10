import React from 'react';
import '../ProgressBar/ProgressBar.css'

export const ProgressBar = ({ completed }) => {
    return (
        <div className="progress-bar">
            <div
                className="progress"
                style={{ width: completed ? '100%' : '50%' }}
            ></div>
        </div>
    );
};