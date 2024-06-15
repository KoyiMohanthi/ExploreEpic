import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/Login";
import Home from "./components/tr_home"; 
import Explore from "./components/explore";
import Nearby from "./components/nearby"; 
import Transport from "./components/transport"; 
import Contact from "./components/contact"; 
import Footer from "./components/footer";
import Userprofile from "./components/userprofile";
import Kanchi from "./components/kanchi"; 
import Madurai from "./components/madhurai";
import Madikeri from "./components/madikeri";
import Coimbatore from "./components/coimbatore";
import Chikkamagaluru from "./components/chikkamagaluru";
import Padmanaba from "./components/padmanaba";
import Sriharikota from "./components/sriharikota";
import Wayanad from "./components/wayanad";
import Mysore from "./components/mysore";
import Tirupati from "./components/tirupati";
import TirupatiRestaurants from "./components/tirupati_restaurants";
import { UserProvider } from './context/UserContext'; // Import UserProvider
import './App.css';
import './components/footer.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <div className="whole_nav">
            <header className="top">
              <nav>
                <ul>
                  <li className="name_family">
                    <span className="name1">Explore</span> <span className="name2">Epic</span><span className="name1">...</span>
                  </li>
                  <div className="options">
                    <li><Link className="active" to="/home" title="Home">Home</Link></li>
                    <li><Link className="active" to="/explore" title="Explore Tirupati">Explore</Link></li>
                    <div className="drop">
                      <p className="dona-btn">
                        <Link className="active dona-btn-a" to="/nearby" title="Nearby Places to VISIT">Nearby</Link>
                      </p>
                      <div className="donation-content">
                        <Link to="/chikkamagaluru">Chikkamagaluru</Link>
                        <Link to="/coimbatore">Coimbatore</Link>
                        <Link to="/kanchi">Kanchi</Link>
                        <Link to="/madhurai">Madhurai</Link>
                        <Link to="/madikeri">Madikeri</Link>
                        <Link to="/mysore">Mysore</Link>
                        <Link to="/padmanaba">Anantha Padmanaba</Link>
                        <Link to="/sriharikota">Sri Hari Kota</Link>
                        <Link to="/wayanad">Wayanad</Link>
                      </div>
                    </div>
                    <li><Link className="active" to="/transport" title="Transport Facility">Transport</Link></li>
                    <li><Link className="active" to="/contact" title="In order to Contact us">Contact</Link></li>
                    <li><Link className="active" to="/signup" title="Login">SignUp</Link></li>
                  </div>
                </ul>
              </nav>
            </header>
          </div>
          <p className="profile1"><Link className="" to="/userprofile" title="profile"><i className="fa-solid fa-user icon"></i></Link></p>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/nearby" element={<Nearby />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/userprofile" element={<Userprofile />} />
            <Route path="/kanchi" element={<Kanchi />} />
            <Route path="/madhurai" element={<Madurai />} />
            <Route path="/madikeri" element={<Madikeri />} />
            <Route path="/coimbatore" element={<Coimbatore />} />
            <Route path="/mysore" element={<Mysore />} />
            <Route path="/chikkamagaluru" element={<Chikkamagaluru />} />
            <Route path="/padmanaba" element={<Padmanaba />} />
            <Route path="/sriharikota" element={<Sriharikota />} />
            <Route path="/wayanad" element={<Wayanad />} />
            <Route path="/tirupati" element={<Tirupati />} />
            <Route path="/tirupati_restaurants" element={<TirupatiRestaurants />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
