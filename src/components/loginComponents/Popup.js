import React from 'react';

const Popup = ({ children, onClose }) => {
    return (
        <div className="popup show">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
