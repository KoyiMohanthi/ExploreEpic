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
      title: "Sriharikota",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/PSLV-C55%2C_TeLEOS-2_-_Panaromic_view_of_SDSC-SHAR%2C_Sriharikota._Partial_stack_of_first_and_second_stage_being_transferred_from_PIF_to_MST-FLP.webp"
    },
    {
      title: "Satellite Control Centre",
      image: "https://images.hindustantimes.com/img/2021/08/11/1600x900/E8gmU4-VUAgxSFi_1628725699542_1628725708963.jpg"
    },
    {
      title: "Satish Dhawan Space Centre",
      image: "https://www.isro.gov.in/media_isro/image/ISRO_Centres/resized/mcc_shar_large.jpg.webp"
    },
    {
      title: "Rocket Launch",
      image: "https://assets.telegraphindia.com/telegraph/2023/Jul/1688365896_sriharikota.jpg"
    },
    {
      title: "Sri Thalpagiri Raganadha",
      image: "https://staticimg.amarujala.com/assets/images/en.myjyotish.com/2022/01/18/750x506/sri-ranganathaswamy-temple_1642525199.jpeg"
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
        <h1 className="place_name">Sriharikota Hotels</h1>
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

export default Kanchi;
