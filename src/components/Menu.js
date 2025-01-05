import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Access global auth state
import LoginPopup from './loginComponents/LoginPopup'; // Import LoginPopup
import Dropdown from './Dropdown'; // Import your Dropdown component

function Menu() {
    const { user, setUser, logout } = useAuth(); // Access auth state and functions from AuthContext
    const [isPopupVisible, setIsPopupVisible] = useState(false); // Manage visibility of the login popup
    const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown visibility

    const showPopup = () => setIsPopupVisible(true);
    const hidePopup = () => setIsPopupVisible(false);

    const handleLogout = () => {
        logout(); // Call the logout function from AuthContext
        setShowDropdown(false); // Close dropdown when logging out
    };

    return (
        <div className="Menu">
            <div className="Logo">tu wpierdolic logo</div>

            {/* Main Menu */}
            <div className="Menu-buttons">
                <Dropdown />
                <div className="Buttons">Kursy i Cenniki</div>
                <div className="Buttons">Nie wiem</div>
                <div className="Buttons">Więcej</div>
            </div>

            {/* User Section or Login Button */}
            {user ? (
                // When the user is logged in, show their username and a dropdown
                <div className="user-section">
                    <button
                        className="account-button"
                        onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
                    >
                        {user.username} ▼
                    </button>
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <ul>
                                <li onClick={() => alert('Profile option clicked')}>Profile</li>
                                <li onClick={() => alert('Settings option clicked')}>Settings</li>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                // If the user is not logged in, show the login button
                <button className="login-button" onClick={showPopup}>Login</button>
            )}

            {/* Show Login Popup if isPopupVisible is true */}
            {isPopupVisible && <LoginPopup setIsPopupVisible={setIsPopupVisible} />}
        </div>
    );
}

export default Menu;
