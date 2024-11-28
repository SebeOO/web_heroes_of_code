import './App.css';

function App() {
    return (
        <div className="Fullpage">
            {/* Sekcja TOP */}
            <div id="TOP">
                <div id="Menu">
                    {/* Miejsce na logo po lewej stronie */}
                    <div className="logo">
                        <a href="index.html">
                            <img src="/logo.png" alt="Logo" />
                        </a>
                    </div>

                    {/* Menu po lewej stronie */}
                    <div className="buttons-menu">
                        <div className="buttons menu">Heroes Of Code</div>
                        <div className="buttons menu">Cennik</div>
                        <div className="buttons menu">Jak nauczamy</div>
                        <div className="buttons menu">Program nauczania</div>
                        <div className="buttons menu">O nas</div>
                        <div className="buttons menu">Kontakt</div>
                    </div>

                    {/* Miejsce na logowanie po prawej stronie */}
                    <div className="login">
                        <button className="login-button">Zaloguj się</button>
                    </div>
                </div>
            </div>

            {/* Sekcja MID */}
            <div className="MID">
                <div className="carousel">
                    <div className="tile">Kafelek 1</div>
                    <div className="tile">Kafelek 2</div>
                    <div className="tile">Kafelek 3</div>
                </div>
            </div>

            {/* Sekcja MID-2 */}
            <div id="MID-2">
                <p>Miejsce na dodatkową treść</p>
            </div>

            {/* Sekcja BOTTOM */}
            <div id="BOTTOM">
                <h2>STOPKA</h2>
            </div>
        </div>
    );
}

export default App;
