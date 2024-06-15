import React, { useState, useEffect } from 'react';
import './kanchi.css';
import jsonData from '../travelers.json';
import { Link } from 'react-router-dom';

const Tirupati = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hotels, setHotels] = useState([]);

  const slides = [
    {
      title: "Tirupati",
      image: "https://cdn.glitch.global/74966f89-6b4a-4631-ad79-95f11a65e0dd/background1.jpg?v=1697539613717"
    },
    {
      title: "Chandragiri Fort",
      image: "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2019/09/DSC_3905.jpg?resize=1140%2C760&ssl=1"
    },
    {
      title: "Geetopadesam Park",
      image: "https://cdn.glitch.global/e03ff2e9-a998-4f89-bd9d-4f165ff29f7e/WhatsApp%20Image%202023-10-16%20at%2016.05.31_f79b6744.jpg?v=1697452628708"
    },
    {
      title: "Iskcon Temple",
      image: "https://www.hoteldekho.com/storage/img/tourattraction/1661590746925862301s.jpg"
    },
    {
      title: "Sri Venkateswara Museum",
      image: "https://4.bp.blogspot.com/-h88k5EO-bC4/XDBjC75F4rI/AAAAAAABP6s/WsEh6Do5XU8iLNv58dSoLPKuW4JSP4QIACLcBGAs/s1600/IMG_1868.JPG"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide >= slides.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    setHotels(jsonData.tirupati);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide >= slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide <= 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
    <div className="middle_places">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div key={index} className={`slide fade ${index === currentSlide ? 'active' : ''}`}>
            <h1>{slide.title}</h1>
            <img className="imgc11" src={slide.image} alt={slide.title} />
          </div>
        ))}
        <a href="#" className="prev" title="Previous" onClick={prevSlide}>&#10094;</a>
        <a href="#" className="next" title="Next" onClick={nextSlide}>&#10095;</a>
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => handleDotClick(index)}></span>
        ))}
      </div>
    
    <div className="bottom_places1">
        <h1 className="place_name">Tirupati Hotels</h1>
        <ul className="hotels-container">
          {hotels.map((hotel, index) => (
            <li key={index} className="hotel">
              <div id="name">
                <h3>{hotel.name}</h3>
              </div>
              <img src={hotel.image} alt={`${hotel.name} Image`} width="300" height="200" />
              <p className="hotels-label"><label>Location:</label>{hotel.location}</p>
              <p className="hotels-label"><label>Type:</label>{hotel.type || 'Hotel'}</p>
              <p className="hotels-label"><label>Rating:</label>{hotel.ratings}</p>
              <p className="hotels-label"><label>Price:</label>{hotel.price}</p>
              <Link to="/contact"> <button className="btn">Book Now</button></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  </>
  );
};

export default Tirupati;
