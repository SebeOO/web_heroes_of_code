import './App.css';

function App() {
    return (
        <div className="Fullpage">
            <div className="Header">
                <div className="Login-button">
                    Zaloguj
                </div>
            </div>
            <div className="Menu">
                <div className="Logo">
                    tu wpierdolic logo
                </div>
                <div className="Menu-buttons">
                    <div className="Buttons">
                        Kursy i Cenniki
                    </div>
                    <div className="Buttons">
                        <button className="Dropdown-btn">O Nas</button>
                        <div className="Dropdown-content">
                            <a href="#">Podpunkt 1</a>
                            <a href="#">Podpunkt 2</a>
                            <a href="#">Podpunkt 3</a>
                            <a href="#">Podpunkt 4</a>
                            <a href="#">Podpunkt 5</a>
                        </div>
                    </div>

                    <div className="Buttons">
                        Nie wiem
                    </div>
                    <div className="Buttons">
                        Więcej
                    </div>
                </div>
            </div>
            <div className="Information-Box">
                Napis czym sie zajmujemy w skrocie
                Profesjonalna nauka dzieci oraz młodzierzy w
                programowaniu Język wybierasz tylko ty reszty uczymy my
            </div>
            <div className="Information-Box-2">
                chcesz zeyb twoj syn lub cUrka od najmlodszych lat uczyli sie programowani zapisz ich do nas
                nauczymy twoje dzcieko wszystkiego od podstaw
                Od aplikacji do pracy po najmniejsze szczegoly
            </div>
            <div className="Photos">
                6 zdjec pokazujace Najlepsze z naszych kursów
            </div>
            <div className="Opinion-set">
                meiijsce na opinie
            </div>
            <div className="gwaration-box">
                pierdolenie ze mamy gwarnacje na nasze uslugi
            </div>
            <div className="Footer">
                Stopka z dużą iloscia pierdolenia ikontkami do socijali itp
            </div>
            <div className="underfooter">
                podstopka z copyrightami
            </div>
        </div>
    );
}


export default App;
