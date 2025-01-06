import './App.css';
import './styles/LoginPopup.css';

import Menu from './components/Menu';
import InformationBox from './components/InformationBox';
import OurVision from './components/OurVision';
import Footer from './components/Footer';
import Underfooter from './components/Underfooter';

function App() {
    return (
        <div className="Fullpage">

            <Menu />
            <InformationBox />
            <OurVision />
            <div className="wrapper">
                <Footer />
                <Underfooter />
            </div>
        </div>
    );
}

export default App;
