import React, { useState, useEffect } from 'react';
import './kanchi.css';
import { Link } from "react-router-dom";
import jsonData from '../travelers.json';

const Chikkamagaluru = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide >= slides.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    setHotels(jsonData.chikkamagaluru);
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

  const slides = [
    {
      title: "Ayyanakere Lake",
      image: "https://static2.tripoto.com/media/filter/tst/img/26369/TripDocument/1545108149_sunrise_1634197_1280.jpg"
    },
    {
      title: "Bhadra Wildlife Sanctuary",
      image: "https://lh3.googleusercontent.com/p/AF1QipPeugvLm6c0Ao_kdb6R435X4iq1ezhoJ22BR2lh=s1360-w1360-h1020"
    },
    {
      title: "Hebbe Falls",
      image: "https://coffeegroveresort.com/wp-content/uploads/2022/01/Top-4-water-falls-in-chikmanagalur1280-x-720.jpg"
    },
    {
      title: "Hirekolale Lake",
      image: "http://mycameralog.com/wp-content/uploads/2022/11/IMG_20221112_120425.jpg"
    },
    {
      title: "Sharadamba Temple",
      image: "https://chikmagalurtourism.org.in/images/places-to-visit/headers/sharadamba-temple-chikmagalur-entry-fee-timings-holidays-reviews-header.jpg"
    }
  ];

  return (
    <div id="middle_places">
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
      <div className="content">
        <p className="content_p">
          <b>
            "Chikmagalur, where the aroma of freshly brewed coffee mingles with the tranquility of nature, 
            is a captivating haven for those seeking a refreshing retreat."
          </b>
          Chikmagalur is a beautiful district in the state of Karnataka, India, and is often referred to 
          as the "Coffee Land of Karnataka." Known for its lush coffee plantations, serene hills, and 
          pristine landscapes, Chikmagalur is a popular destination for tourists looking to escape the
          hustle and bustle of city life and immerse themselves in the lap of nature.
        </p>
      </div>
      <div className="bottom_places1">
        <h1 className="place_name">Chikkamagaluru Hotels</h1>
        <ul className="hotels-container">
          {hotels.map((hotel, index) => (
            <li key={index} className="hotel">
              <div id="name">
                <h3>{hotel.name}</h3>
              </div>
              <img src={hotel.image} alt={`${hotel.name} Image`} width="300" height="200" />
              <p><label>Location: </label>{hotel.location}</p>
              <p><label>Type: </label>{hotel.type || 'Hotel'}</p>
              <p><label>Rating: </label>{hotel.rating}</p>
              <p><label>Price: </label>{hotel.price}</p>
              <Link to="/contact"> <button className="btn">Book Now</button></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chikkamagaluru;
