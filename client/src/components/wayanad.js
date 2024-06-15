import React, { useState, useEffect } from 'react';
import './kanchi.css';
import { Link } from "react-router-dom";
import jsonData from '../travelers.json'; 

const Wayanad = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide >= slides.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    setHotels(jsonData.wayanad);
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
      title: "Wayand Greenery",
      image: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2019/02/og-for-Places-To-Visit-Near-Wayanad.jpg"
    },
    {
      title: "Tree House",
      image: "https://www.abhibus.com/blog/wp-content/uploads/2023/04/In-the-Lap-of-NatureTop-10-Romantic-Tree-Houses-in-India.jpg"
    },
    {
      title: "Soochipara WaterFalls",
      image: "https://media2.thrillophilia.com/images/photos/000/221/959/original/1641281430_shutterstock_353637560.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true"
    },
    {
      title: "Kozikode Beach",
      image: "https://www.trawell.in/blog/wp-content/uploads/2021/06/Main_Image.jpg"
    },
    {
      title: "Pookode Lake",
      image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Wayanad-1.jpg"
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
            "Wayanad is a captivating and picturesque district located in the state of Kerala, India. Nestled in the Western Ghats, Wayanad is renowned for its pristine natural beauty, making it a popular destination for tourists seeking tranquility and close encounters with nature."
          </b>
        </p>
      </div>
      <div className="bottom_places1">
        <h1 className="place_name">Wayanad Hotels</h1>
        <ul className="hotels-container">
          {hotels.map((hotel, index) => (
            <li key={index} className="hotel">
              <div id="name">
                <h3>{hotel.name}</h3>
              </div>
              <img src={hotel.image} alt={`${hotel.name} Image`} width="300" height="200" />
              <p className="hotels-label"><label>Location:</label>{hotel.location}</p>
              <p className="hotels-label"><label>Type:</label>{hotel.type || 'Hotel'}</p>
              <p className="hotels-label"><label>Rating:</label>{hotel.rating}</p>
              <p className="hotels-label"><label>Price:</label>{hotel.price}</p>
              <Link to="/contact"> <button className="btn">Book Now</button></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wayanad;
