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
      title: "Mysore Palace",
      image: "https://www.revv.co.in/blogs/wp-content/uploads/2020/03/picnic-places-near-mysore.jpg"
    },
    {
      title: "Karanji Lake",
      image: "https://www.fabhotels.com/blog/wp-content/uploads/2022/04/karanji-lake-mysore-1-min.jpg"
    },
    {
      title: "Somnathpur",
      image: "https://www.holidify.com/images/cmsuploads/compressed/Temple_at_Somnathpur_20180317143032.jpg"
    },
    {
      title: "Mysore Night View",
      image: "https://www.holidify.com/images/bgImages/MYSORE.jpg"
    },
    {
      title: "Residence of the Royal Family",
      image: "https://media2.thrillophilia.com/images/photos/000/031/012/original/1554981542_Mysore-shutterstock_122322643-R.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true"
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
            "Mysore, the City of Palaces, is a historically rich and culturally vibrant city located in the 
            state of Karnataka, India. It is known for its regal heritage, grand palaces, and thriving arts 
            and cultural scene."
          </b>
          Mysore is a city that seamlessly blends its royal past with modernity, making it a captivating 
          destination for history enthusiasts, art lovers, and those seeking a glimpse into India's regal
          heritage.
        </p>
      </div>
      <div className="bottom_places1">
        <h1 className="place_name">Mysore Hotels</h1>
        <ul className="hotels-container">
          {hotels.map((hotel, index) => (
            <li key={index} className="hotel">
              <div id="name">
                <h3>{hotel.hotelName}</h3>
              </div>
              <img src={hotel.img} alt={`${hotel.hotelName} Image`} width="300" height="200" />
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
