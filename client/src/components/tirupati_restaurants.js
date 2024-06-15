import React, { useState, useEffect } from 'react';
import './tirupati_restuarants.css';
// import { Link } from "react-router-dom";
import jsonData from '../travelers.json'; 

const TirupatiRestaurants = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide >= slides.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    setRestaurants(jsonData.tirupatiRestaurants);
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
      title: "Restaurant 1",
      image: "https://content.jdmagicbox.com/comp/rudrapur/m5/9999p5944.5944.170114111914.f9m5/catalogue/pappu-dhaba-rudrapur-restaurants-ii8sm.jpg"
    },
    {
      title: "Restaurant 2",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/16324049.jpg?k=3b79530b9d8097ae877092d4fa02b31fa2ac8d1ae35ad8c45d71a1746b43387d&o=&hp=1"
    },
    {
      title: "Restaurant 3",
      image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/275508825.jpg?k=4053f5beaa5e225f8ec0d1818be4c75c69f4f8a59c1986a028d787bccf1941ed&o="
    },
    {
      title: "Restaurant 4",
      image: "https://www.fortunehotels.in/hotel-image/gallery/thumb/201511261144.jpg"
    },
    {
      title: "Restaurant 5",
      image: "https://stayeatsee.s3.amazonaws.com/media/public/listing/full/0a603db663e5a5def0701c3135369c7a7fc53b90.large.webp"
    },
  ];

  return (
    <div className="middle_places">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div key={index} className={`slide fade ${index === currentSlide ? 'active' : ''}`}>
            <h2>{slide.title}</h2>
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
        <h1 className="place_name">Tirupati Restaurants</h1>
        <div className="restaurant-container">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="restaurant-details">
              <div className="restaurant-image">
                <h2>{restaurant.name}</h2>
                <img src={restaurant.image} alt={`Restaurant ${index + 1} Image`} />
              </div>
              <p><b>Cuisines:</b> {restaurant.cuisines}</p>
              <p><b>Special Diets:</b> {restaurant.specialDiets}</p>
              <p><b>Meals:</b> {restaurant.meals}</p>
              <p><b>Address:</b> {restaurant.address}</p>
              <p><b>Rating:</b> {restaurant.rating}</p>
              <p><b>Contact:</b> {restaurant.contact}</p>
              <center>
                <a href={restaurant.website}><button className="bbttnn">View More</button></a>
              </center>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TirupatiRestaurants;
