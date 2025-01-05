import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Access global auth state
import Popup from './Popup'; // Popup container for modal
import axios from 'axios'; // Import axios
import LoginForm from './LoginForm'; // Form for login and registration
import DropdownMenu from './DropdownMenu'; // Dropdown menu for logged-in users
import ActionButtons from './ActionButtons'; // Action buttons for toggling modes

function LoginPopup({ setIsPopupVisible }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); // Default to login mode
    const { user, setUser, logout } = useAuth(); // Access user state and functions

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isRegistering && password !== confirmPassword) {
            alert('Passwords must match!');
            return;
        }

        const url = isRegistering
            ? 'http://localhost:8080/api/auth/register'
            : 'http://localhost:8080/api/auth/login';

        const data = { username, password };

        try {
            const response = await axios.post(url, data);

            if (response.status === 200) {
                alert(isRegistering ? 'Registration successful!' : 'Login successful!');

                if (!isRegistering) {
                    const { token } = response.data;
                    const username = data.username;

                    if (token && username) {
                        localStorage.setItem('authToken', token);
                        localStorage.setItem('username', username);

                        setUser({ username, token });
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

    return (
        <div>
            {user ? (
                <DropdownMenu user={user} handleLogout={logout} />
            ) : (
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
                                setUsername('');
                                setPassword('');
                                setConfirmPassword('');
                            }}
                        >
                            {isRegistering
                                ? 'Already have an account? Login'
                                : 'Don\'t have an account? Register'}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default LoginPopup;