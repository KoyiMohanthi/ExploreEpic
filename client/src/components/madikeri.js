import React, { useState, useEffect } from 'react';
import './kanchi.css';
import { Link } from "react-router-dom";
import jsonData from '../travelers.json'; 

const Kanchi = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide >= slides.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    setHotels(jsonData.kanchi);
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
      title: "Raja's Seat, Coorg",
      image: "https://lh3.googleusercontent.com/p/AF1QipMWfXfUW6mcsIQEKOg_sNAGL_8AgLZIeAuxt9iv=s1360-w1360-h1020"
    },
    {
      title: "Abbey Falls",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Abbey_Falls_New.jpg"
    },
    {
      title: "Omkareshwara Temple Road",
      image: "https://coorgtourism.co.in/images/places-to-visit/headers/omkareshwara-temple-coorg-tourism-entry-fee-timings-holidays-reviews-header.jpg"
    },
    {
      title: "Mandalpatti Peak",
      image: "https://coorgtourism.co.in/images/places-to-visit/headers/somwarpet-near-madikeri-coorg-entry-fee-timings-holidays-reviews-header.jpg"
    },
    {
      title: "Jungle Lodges and Resorts",
      image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202105261638189951-e1560011-ffea-4277-b848-143352b70f53.jpg"
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
            "Madikeri, the Scotland of India, is a picturesque hill station and the capital of Coorg (Kodagu) 
            district in the state of Karnataka, India. It is renowned for its lush landscapes, misty hills,
            coffee plantations, and rich cultural heritage."
          </b>
          Madikeri, nestled in the Western Ghats, is a tranquil and scenic destination that offers a
          refreshing escape from the hustle and bustle of city life.
        </p>
      </div>
      <div className="bottom_places1">
        <h1 className="place_name">Madikeri Hotels</h1>
        <ul className="hotels-container">
          {hotels.map((hotel, index) => (
            <li key={index} className="hotel">
              <div id="name">
                <h3>{hotel.name}</h3>
              </div>
              <img src={hotel.img} alt={`${hotel.name} Image`} width="300" height="200" />
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

export default Kanchi;
