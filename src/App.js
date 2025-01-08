import './App.css';
import './styles/LoginPopup.css';

import Menu from './components/Menu';
import Hero from './components/Hero';
import OurVision from './components/OurVision';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Underfooter from './components/Underfooter';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <div className="Fullpage">

                <Menu />
                <Hero />
                <Banner />
                <OurVision />
                <div className="wrapper">
                    <Footer />
                    <Underfooter />
                </div>
            </div>
        </AuthProvider>
    );
}

export default App;
