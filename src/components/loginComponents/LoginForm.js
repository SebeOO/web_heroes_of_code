import React from 'react';

const LoginForm = ({
                       isRegistering,
                       username,
                       password,
                       confirmPassword,
                       setUsername,
                       setPassword,
                       setConfirmPassword,
                       handleSubmit,
                       toggleRegisterMode,
                   }) => {
    return (
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
            </div>
        </form>
    );
};

export default LoginForm;
