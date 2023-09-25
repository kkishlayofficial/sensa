import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./index.scss";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };

  const altItems = ["All", "Bar-Syrup%2FMocktail", "Fruit Crushes", "Sauces"];

  return (
    <div className='hero-section-carousel'>
      <Slider {...settings}>
        {altItems.map((item, idx) => {
          return (
            <Link title={`Link to ${item} products`} to={`/products?category=${item}`}>
              <div className={`carouselItems item${idx}`}></div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Header;
