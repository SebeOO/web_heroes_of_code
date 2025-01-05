import React, { useState } from 'react';

function LoginPopup({ setIsPopupVisible }) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); // Domyślnie ustawiamy na "logowanie"

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isRegistering && password !== confirmPassword) {
            alert('Hasła muszą być takie same!');
            return;
        }

        alert(isRegistering ? 'Rejestracja zakończona sukcesem!' : 'Zalogowano pomyślnie!');
        setIsPopupVisible(false); // Zamknięcie okna popup po udanym logowaniu/rejestracji
    };

    const resetForm = () => {
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="popup show">
            <div className="popup-content">
                <button className="close-btn" onClick={() => setIsPopupVisible(false)}>
                    ×
                </button>
                <h2>{isRegistering ? 'Rejestracja' : 'Zaloguj się'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    {isRegistering && (
                        <div className="input-group">
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <label htmlFor="username">Login</label>
                        </div>
                    )}
                    <div className="input-group">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Hasło</label>
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
                            <label htmlFor="confirmPassword">Powtórz hasło</label>
                        </div>
                    )}
                    <div className="actions">
                        <button type="submit">{isRegistering ? 'Zarejestruj się' : 'Zaloguj się'}</button>
                        <button type="button" onClick={() => {
                            setIsRegistering(!isRegistering); // Przełącza między logowaniem i rejestracją
                            resetForm(); // Resetuje formularz po zmianie
                        }}>
                            {isRegistering ? 'Masz już konto? Zaloguj się' : 'Nie masz konta? Zarejestruj się'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPopup;
