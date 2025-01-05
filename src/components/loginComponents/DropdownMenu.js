import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = ({ user, handleLogout }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    // Close the dropdown if clicked outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close the dropdown only if clicked outside both the dropdown and the button
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setShowDropdown(false); // Close dropdown when clicking outside
            }
        };

        // Listen for clicks outside
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = (event) => {
        event.stopPropagation();  // Prevent the click from reaching the document and closing it
        setShowDropdown((prev) => !prev); // Toggle dropdown visibility
    };

    return (
        <div className="account-container">
            <button
                className="account-button"
                onClick={toggleDropdown}  // Toggle visibility
                ref={buttonRef}  // Reference for button to check for outside clicks
            >
                {user.username} ▼
            </button>
            <div
                ref={dropdownRef}  // Attach the ref to the dropdown container
                style={{
                    position: 'absolute',  // Keep it outside the layout flow
                    top: '40px',           // Adjust the position as needed
                    right: '0',
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '5px',
                    zIndex: '9999',        // Ensure it's above other elements
                    width: '150px',
                    display: showDropdown ? 'block' : 'none',  // Control visibility via inline style
                    pointerEvents: showDropdown ? 'auto' : 'none'  // Disable interaction when hidden
                }}
            >
                <ul>
                    <li onClick={() => alert('Profile option clicked')}>Profile</li>
                    <li onClick={() => alert('Settings option clicked')}>Settings</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;
