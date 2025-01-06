import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Access global auth state
import LoginPopup from './loginComponents/LoginPopup'; // Import LoginPopup
import axios from 'axios';

function Menu() {
    const { user, setUser, logout } = useAuth(); // Access auth state and functions from AuthContext
    const [isPopupVisible, setIsPopupVisible] = useState(false); // Manage visibility of the login popup
    const [showDropdown, setShowDropdown] = useState(false); // Toggle dropdown visibility

    const showPopup = () => setIsPopupVisible(true);
    const hidePopup = () => setIsPopupVisible(false);
    const testApi = async () => {
        try {
            const response = await axios.get('http://localhost:8080/test', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}` // Include token
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLogout = () => {
        logout(); // Call the logout function from AuthContext
        setShowDropdown(false); // Close dropdown when logging out
    };

    return (
        <div className="Menu">
            <div className="Logo">tu wpierdolic logo</div>

            {/* Main Menu */}
            <div className="Menu-buttons">
                <div className="Buttons">Kursy i Cenniki</div>
                <div className="Buttons">Nie wiem</div>
                <div className="Buttons">Więcej</div>
            </div>

            {/* User Section or Login Button */}
            {user ? (
                // When the user is logged in, show their username and a dropdown
                <div
                    className="user-section"
                    onMouseEnter={() => setShowDropdown(true)} // Show dropdown on hover
                    onMouseLeave={() => setShowDropdown(false)} // Hide dropdown when mouse leaves
                >
                    <button className="account-button">
                        {user.username} ▼
                    </button>
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <ul>
                                <li onClick={() => alert('Profile option clicked')}>Profile</li>
                                <li onClick={() => testApi()}>Settings</li>
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
