import React, { useState } from 'react';
import LoginPopup from './LoginPopup'; // Import komponentu LoginPopup
import Dropdown from "./Dropdown";

function Menu() {
    const [isPopupVisible, setIsPopupVisible] = useState(false); // Stan do kontrolowania widoczności popup

    const handlePopupToggle = () => {
        setIsPopupVisible(!isPopupVisible); // Przełącza widoczność okna popup
    };

    return (
        <div className="Menu">
            <div className="Logo">tu wpierdolic logo</div>
            <div className="Menu-buttons">
                <Dropdown />
                <div className="Buttons">Kursy i Cenniki</div>
                <div className="Buttons">Nie wiem</div>
                <div className="Buttons">Więcej</div>
            </div>
            <div className="Buttons" onClick={handlePopupToggle}>
                Zaloguj
            </div>

            {/* Renderujemy LoginPopup tylko wtedy, gdy jest widoczny */}
            {isPopupVisible && <LoginPopup setIsPopupVisible={setIsPopupVisible} />}
        </div>
    );
}

export default Menu;
