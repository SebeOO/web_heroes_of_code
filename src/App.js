import './App.css';
import './styles/LoginPopup.css';

import Menu from './components/Menu';
import Home from './Home';
import Course from './Course';
// import Hero from './components/Hero';
// import OurVision from './components/OurVision';
// import Banner from './components/Banner';
import Footer from './components/Footer';
import Underfooter from './components/Underfooter';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="Fullpage">
                    <Menu />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/course">
                                <Course />
                            </Route>
                        </Switch>
                    <div className="wrapper">
                        <Footer />
                        <Underfooter />
                    </div>
                </div>
            </AuthProvider>
        </Router>

        // <AuthProvider>
        //     <div className="Fullpage">
        //         <Menu />
        //         <Hero />
        //         <Banner />
        //         <OurVision />
        //         <div className="wrapper">
        //             <Footer />
        //             <Underfooter />
        //         </div>
        //     </div>
        // </AuthProvider>
    );
}

export default App;
