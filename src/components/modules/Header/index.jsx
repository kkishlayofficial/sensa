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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const altItems = ["All", "Bar-Syrup and Mocktail", "Fruit Crushes", "Sauces"];

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
