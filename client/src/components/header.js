// src/components/Header.js
import './header.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
// import Explore from './explore';

function Header() {
  return (
    <div className="whole">
      <header className="top">
        <nav>
          <ul>
            <li className="name">
              <span className="name1">Explore</span> <span className="name2">Epic</span><span className="name1">...</span>
            </li>
            <div className="options">
              <li><a className="active" href="/home" target="_self" title="Home">Home</a></li>
              <li><Link className="active" to="./explore" title="Explore Tirupati">Explore</Link></li> 
              <div className="drop">
                <p className="dona-btn">
                  <a className="active dona-btn-a" href="/nearby" target="_self" title="Nearby Places to VISIT">Nearby</a>
                </p>
                <div className="donation-content">
                  <a href="/chikkamagaluru">Chikkamagaluru</a>
                  <a href="/coimbatore">Coimbatore</a>
                  <a href="/kanchi">Kanchi</a>
                  <a href="/madhurai">Madhurai</a>
                  <a href="/madikeri">Madikeri</a>
                  <a href="/mysore">Mysore</a>
                  <a href="/padmanaba">Anantha Padmanaba</a>
                  <a href="/sriharikota">Sri Hari Kota</a>
                  <a href="/wayanad">Wayanad</a>
                </div>
              </div>
              <li><a className="active" href="/transport" target="_self" title="Transport Facility">Transport</a></li>
              <li><a className="active" href="/contact" target="_self" title="In order to Contact us">Contact</a></li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
