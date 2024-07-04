import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fields from './pages/Fields';
import Profile from './pages/Profile';
import Contacts from './pages/Contacts';
import styles from './style';


function App() {
  return (
    <div className="bg-[#fff] w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/fields" element={<Fields />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
        </div>
      </div>

      <div className={`bg-[#1e3f74] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
