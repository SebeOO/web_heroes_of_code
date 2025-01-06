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
                <div className="Logo">
                    <a href="/index.html">
                        <img src="/img/logo_new.png" alt="Code Heroes Logo" width="200"/>
                    </a>
                </div>
            <div className="Menu-buttons">
                    <div className="Buttons">Kursy</div>
                    <div className="Buttons">Kontakt</div>
                    <div className="Buttons inactive">Forum</div>
                    <div className="Buttons inactive">Pomoc</div>
                </div>

                <div className="Buttons special" onClick={handlePopupToggle}>
                    Wypróbuj za darmo!
                </div>

            {/* Renderujemy LoginPopup tylko wtedy, gdy jest widoczny */}
            {isPopupVisible && <LoginPopup setIsPopupVisible={setIsPopupVisible}/>}
        </div>
    );
}

export default Menu;
