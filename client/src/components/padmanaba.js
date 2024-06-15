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
      title: "Sri Padmanabha Swamy",
      image: "https://imageio.forbes.com/blogs-images/jimdobson/files/2015/11/Sri-Padmanabhaswamy-Temple-Mahavishnu-Idol-32-KG.jpg?height=533&width=711&fit=bounds"
    },
    {
      title: "Pazhavangadi Sree Mahaganapathy Temple",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Kottarakkara_Temple(HighResoluion).jpg"
    },
    {
      title: "Kanakakkunnu Palace Trivandrum",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Kanakakkunnu-palace-trivandrum.jpg"
    },
    {
      title: "Napier Museum",
      image: "https://lh3.googleusercontent.com/p/AF1QipMpaE0MtNxrL7x53eGlOoVVkcTzw-Df3Pn-6OmJ=s1360-w1360-h1020"
    },
    {
      title: "Thiruvananthapuram Zoo",
      image: "https://images.pexels.com/photos/6384869/pexels-photo-6384869.jpeg?cs=srgb&dl=pexels-hermann-breitbach-6384869.jpg&fm=jpg"
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
            "Sree Padmanabhaswamy Temple, where devotion meets opulence, is a magnificent and revered 
            shrine nestled in the heart of Thiruvananthapuram, Kerala, India."
          </b>

          Sree Padmanabhaswamy Temple is one of the most significant and iconic temples in India, known for 
          its grandeur, rich history, and the incredible treasures hidden within its sacred vaults. The temple
          is not just a place of worship but also a testament to the rich cultural and religious heritage of 
          the region.
        </p>
      </div>
      <div className="bottom_places1">
        <h1 className="place_name">Anantha Padmanabha Hotels</h1>
        <ul className="hotels-container">
          {hotels.map((hotel, index) => (
            <li key={index} className="hotel">
              <h3>{hotel.name}</h3>
              <img src={hotel.img} alt="Hotel Image" width="300" height="200" />
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

export default Kanchi;
