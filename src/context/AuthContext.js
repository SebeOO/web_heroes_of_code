import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // On initial load, check if there's a token in localStorage
        const token = localStorage.getItem('authToken');
        const username = localStorage.getItem('username');

        if (token && username) {
            // If there's a token and username, we assume the user is logged in.
            setUser({ token, username });
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('authToken'); // Remove token from localStorage
        localStorage.removeItem('username'); // Remove username from localStorage
        setUser(null); // Clear user state
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
