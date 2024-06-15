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
      title: "Kamakshi Amma",
      image: "https://www.holidify.com/images/cmsuploads/compressed/A-beautiful-image-of-Kamakshi-Amman-Temple-pond-with-towers_20171219212102.jpg"
    },
    {
      title: "Shore Temple",
      image: "https://lh3.googleusercontent.com/-DB0k7FF_fUE/YdaaMOCG4aI/AAAAAAAABCQ/-ZQf07teAOwk9nhuGACkR2bKYLu1rX31gCNcBGAsYHQ/w653-h357/image.png"
    },
    {
      title: "Kanara Park",
      image: "https://2.bp.blogspot.com/-a-AZ2izJem0/UWuBlSM-9dI/AAAAAAAAOkw/q7ibek5vO-w/s1600/Chennai+Trade+Centre.jpg"
    },
    {
      title: "10000 Pillars  Hall",
      image: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_696066628_20191213144534.jpg"
    },
    {
      title: "Arignar Anna Zoological Park",
      image: "https://static2-clubmahindra.gumlet.io/storage/app/media/International%20Resorts/Summer%20Bay%20Orlando/Animal%20kingdom-180709901.jpg?w=600&dpr=2.6"
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
            "Kanchipuram, the City of Thousand Temples, is an ancient and sacred city located 
            in the state of Tamil Nadu, India. It is renowned for its historical significance,
            architectural marvels, and spiritual heritage."
          </b>
          Kanchipuram, often referred to as Kanchi, is one of the seven Moksha-puris, sacred 
          places believed to provide salvation to those who visit. It has a rich cultural and 
          religious heritage that dates back to ancient times.
        </p>
      </div>
      <div className="bottom_places1">
        <h1 className="place_name">Kanchi Hotels</h1>
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
