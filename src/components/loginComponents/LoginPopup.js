import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; // Access global auth state


function LoginPopup({ setIsPopupVisible }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); // Default to login mode
    const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility
    const { user, setUser, logout } = useAuth(); // Accessing user state and functions

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate password match during registration (only if registering)
        if (isRegistering && password !== confirmPassword) {
            alert('Passwords must match!');
            return;
        }

        const url = isRegistering
            ? 'http://localhost:8080/api/auth/register'
            : 'http://localhost:8080/api/auth/login';

        const data = { username, password }; // This is the data sent to the backend

        try {
            const response = await axios.post(url, data);

            if (response.status === 200) {


                if (!isRegistering) {

                    // After successful login, the backend will return the token and username (or email)
                    const  token = response.data;
                    const  username = data.username;

                    // Ensure response has token and username before storing them
                    if (token && username) {
                        // Store token and username in localStorage
                        console.log(data)
                        console.log(response)
                        localStorage.setItem('authToken', token); // Save token for future requests
                        localStorage.setItem('username', username); // Save username (email) for UI updates

                        // Store user information in global state for UI updates
                        setUser({ username, token });

                        // Close the login popup
                        setIsPopupVisible(false);
                    } else {
                        alert('Login failed. Please try again.');
                    }
                }
            } else {
                alert('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error during authentication:', error);
            alert('An error occurred. Please try again.');
        }
    };




    const resetForm = () => {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleLogout = () => {
        logout();
        localStorage.removeItem('authToken'); // Clear token from localStorage
        setShowDropdown(false); // Hide dropdown on logout
    };

    // Render login/register form if not logged in
    return (
        <div className="popup show">
            <div className="popup-content">
                <button className="close-btn" onClick={() => setIsPopupVisible(false)}>
                    ×
                </button>
                <h2>{isRegistering ? 'Register' : 'Login'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="username">Email</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    {isRegistering && (
                        <div className="input-group">
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                    )}
                    <div className="actions">
                        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
                        <button
                            type="button"
                            onClick={() => {
                                setIsRegistering(!isRegistering);
                                resetForm();
                            }}
                        >
                            {isRegistering
                                ? 'Already have an account? Login'
                                : 'Don\'t have an account? Register'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPopup;