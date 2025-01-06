import './App.css';
import './styles/LoginPopup.css';

import Menu from './components/Menu';
import InformationBox from './components/InformationBox';
import Footer from './components/Footer';
import Underfooter from './components/Underfooter';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <div className="Fullpage">
                <Menu />
                <InformationBox />
                <div className="Information-Box-2">
                    chcesz zeby twoj syn lub cUrka od najmlodszych lat uczyli sie programowania zapisz ich do nas
                    nauczymy twoje dziecko wszystkiego od podstaw
                    Od aplikacji do pracy po najmniejsze szczegóły
                </div>
                <div className="Photos">
                    6 zdjęć pokazujących najlepsze z naszych kursów
                </div>
                <div className="Opinion-set">
                    miejsce na opinie
                </div>
                <div className="gwaration-box">
                    pierdolenie że mamy gwarancję na nasze usługi
                </div>
                <div className="wrapper">
                    <Footer />
                    <Underfooter />
                </div>
            </div>
        </AuthProvider>
    );
}

export default App;