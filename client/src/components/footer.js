// src/components/Footer.js
import React from 'react';
import './footer.css';
function Footer() {
  return (
    
    <footer>
      
      <div>
        <center style={{ color: 'rgb(0, 0, 0)' }}>
          <h1 className='footerh1'><strong>...Get in Touch</strong></h1>
        </center>
      </div>
      <div className="foot">
        <div id="rec">
          <p className="name11"><strong>Recommended</strong></p>
          <div className="c2">
            <div className="c1">
              <a href="https://twitter.com/A1264M"><i className="fa-brands fa-square-twitter" id="tw"></i></a>
              <em>kundhumaddisetti</em>
            </div>
            <div className="c1">
              <a href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-regular fa-envelope" id="em"></i></a>
              <em>moni2003@gmail.com</em>
            </div>
          </div>
          <div className="c2">
            <div className="c1">
              <a href="https://github.com/kundhanamaddisetti"><i className="fa-brands fa-github" id="gi"></i></a>
              <em>kundhanamaddisetti</em>
            </div>
            <div className="c1">
              <a href="https://www.linkedin.com/in/kundhana-lalitha-naga-sri-maddisetti-197b73239/"><i className="fa-brands fa-linkedin" id="li"></i></a>
              <em>Kundhana</em>
            </div>
          </div>
        </div>
        <div id="oth">
          <p className="name11"><strong>Other methods</strong></p>
          <div className="c2">
            <div className="c1">
              <a href="#"><i className="fa-brands fa-square-whatsapp" id="wh"></i></a>
              <em>xxxxx 18101</em>
            </div>
            <div className="c1">
              <a href="#"><i className="fa-solid fa-phone" id="ph"></i></a>
              <em>xxxxx 18101</em>
            </div>
          </div>
          <div className="c2">
            <div className="c1">
              <a href="https://www.facebook.com/profile.php?id=100075638365796&mibextid=ZbWKwL"><i className="fa-brands fa-facebook" id="fa"></i></a>
              <em>Parameswari Jagarlamudi</em>
            </div>
            <div className="c1">
              <a href="https://instagram.com/kundhuu19?utm_source=qr&igshid=OGU0MmVlOWVjOQ=="><i className="fa-brands fa-instagram" id="in"></i></a>
              <em>kundhana</em>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
