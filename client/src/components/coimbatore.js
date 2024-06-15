import React, { useState, useEffect } from 'react';
import './kanchi.css';
import { Link } from "react-router-dom";
import jsonData from '../travelers.json'; 

const Coimbatore = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide >= slides.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    setHotels(jsonData.coimbatore);
  }, []);

  const slides = [
    {
      title: "Adiyogi - The Source of Yoga",
      image: "https://facts.net/wp-content/uploads/2023/07/49-facts-about-coimbatore-1688360759.jpeg"
    },
    {
      title: "Velliangiri Hills",
      image: "https://res.cloudinary.com/chasset/hbimages/desktop/1530688259485-Coimbatore.jpg"
    },
    {
      title: "Siruvani WaterFalls",
      image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/coimbatore-1655999210_9c2cb848386c10e17c0d.webp"
    },
    {
      title: "TNAU Botanical Garden",
      image: "https://lh3.googleusercontent.com/p/AF1QipM2-06-HKoTvNUcNXF_I0Q7JyjvRVViGLWV__B1=s1360-w1360-h1020"
    },
    {
      title: "Police Museum",
      image: "https://image-timescontent.timesgroup.com/thumb/513275.webp"
    }
  ];

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
            "Coimbatore, the Manchester of South India, is a bustling and industrious city nestled in the 
            state of Tamil Nadu. It offers a unique blend of urban development, industrial progress, and 
            natural beauty."
          </b>
          Coimbatore, often referred to as Kovai, is a city with a rich history and a vibrant present.
          It serves as an important economic and cultural hub in the southern region of India.
        </p>
      </div>
      <div className="bottom_places1">
        <h1 className="place_name">Coimbatore Hotels</h1>
        <ul className="hotels-container">
          {hotels.map((hotel, index) => (
            <li key={index} className="hotel">
              <div id="name">
                <h3>{hotel.name}</h3>
              </div>
              <img className="hotels_img" src={hotel.image} alt="Hotel Image" width="300" height="200" />
              <p><label>Location&nbsp;:&nbsp;&nbsp;&nbsp;</label>{hotel.location}</p>
              <p><label>Type&nbsp;:&nbsp;&nbsp;</label>{hotel.type || 'Hotel'}</p>
              <p><label>Rating&nbsp;:&nbsp;&nbsp;</label>{hotel.rating}</p>
              <p><label>Price&nbsp;:&nbsp;&nbsp;</label>{hotel.price_per_night}</p>
              <p><label>Coupon&nbsp;:&nbsp;&nbsp;</label>{hotel.coupon_code}</p>
              <Link to="/contact"> <button className="btn">Book Now</button></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Coimbatore;
