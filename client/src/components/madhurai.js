import React, { useState, useEffect } from 'react';
import './kanchi.css';
import { Link } from "react-router-dom";
import jsonData from '../travelers.json';

const Madurai = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide >= slides.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    setHotels(jsonData.madurai);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide >= slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide <= 0 ? slides.length - 1 : currentSlide - 1);
  };

  const slides = [
    {
      title: "Meenakshi Amma Temple",
      image: "https://media2.thrillophilia.com/images/photos/000/111/209/original/1584371414_shutterstock_1122438074.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true"
    },
    {
      title: "Thrirumalai Nayakar Mahal",
      image: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2017/03/Thirumalai-Nayakkar-Palace.jpg"
    },
    {
      title: "Gandhi Memorial Museum",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gandhi_museum%2C_Madurai.jpg/1200px-Gandhi_museum%2C_Madurai.jpg"
    },
    {
      title: "Meghamalai",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2021/10/shutterstock_2254368783.jpg"
    },
    {
      title: "Yanai Malai Jain sculptures",
      image: "https://miro.medium.com/v2/resize:fit:3456/1*ToUEJVbfv3x2QJ39Le3RWQ.jpeg"
    }
  ];

  return (
    <div id="middle_places">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div key={index} className={`slide fade ${index === currentSlide ? 'active' : ''}`}>
            <img className="imgc11" src={slide.image} alt={slide.title} />
            <h1>{slide.title}</h1>
          </div>
        ))}
        <a href="#" className="prev" title="Previous" onClick={prevSlide}>&#10094;</a>
        <a href="#" className="next" title="Next" onClick={nextSlide}>&#10095;</a>
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
        ))}
      </div>
      <div className="content">
        <p className="content_p">
          <b>
            "Madurai, where the echoes of ancient temples and the fragrance of jasmine flowers merge, is 
            a city that captivates your heart and soul. Explore the spiritual aura, vibrant culture, and 
            rich history that define the soul of Madurai."
          </b>
          Madurai, often referred to as the "Athens of the East," is one of South 
          India's oldest and most culturally rich cities. Located in the state of 
          Tamil Nadu, India, Madurai is a city steeped in history and tradition.
        </p>
      </div>
      <div className="bottom_places1">
        <h1 className="place_name">Madurai Hotels</h1>
        <ul className="hotels-container">
          {hotels.map((hotel, index) => (
            <li key={index} className="hotel">
              <div id="name">
                <h3>{hotel.name}</h3>
              </div>
              <img src={hotel.img} alt={`${hotel.name} Image`} width="300" height="200" />
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

export default Madurai;
