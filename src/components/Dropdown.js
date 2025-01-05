import React, { useState } from 'react';

function Dropdown() {
    const [isActive, setIsActive] = useState(false);

    const toggleDropdown = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="Buttons">
            <button className="Dropdown-btn" onClick={toggleDropdown}>
                O Nas
            </button>
            {isActive && (
                <div className="Dropdown-content">
                    <a href="#">Podpunkt 1</a>
                    <a href="#">Podpunkt 2</a>
                    <a href="#">Podpunkt 3</a>
                    <a href="#">Podpunkt 4</a>
                    <a href="#">Podpunkt 5</a>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
