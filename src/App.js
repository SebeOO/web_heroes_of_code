import './App.css';

function App() {
    return (
        <div className="Fullpage">
            <div id="TOP">
                <div id="Menu">
                    {/* Miejsce na logo po lewej stronie */}
                    <div className="logo">
                        <div className="logo">
                            <a href="index.html">
                                <img src="/logo.png" alt="Logo"/>
                            </a>
                        </div>


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
        </div>
    );
}

export default App;
