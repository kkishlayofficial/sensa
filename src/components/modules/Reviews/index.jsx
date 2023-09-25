import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import ReviewForm from "./ReviewForm";
import { SampleNextArrow, SamplePrevArrow } from "../../elements/ArrowButton";
import { Reviews } from "../../../data";

const ReviewCarousel = () => {
  const [reviews, setReviews] = useState(Reviews);
  const handleSubmitReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div className='review-section' id='reviews'>
      <div className='title'>
        <h1 title="Reviews">Reviews</h1>
      </div>
      <div className="review-container">
      <div className='review-carousel'>
        <Slider {...settings} ref={sliderRef}>
          {reviews.map((review) => (
            <div className='review-page'>
              <div key={review.id} className='review-item'>
                <p className='review-text'>{review.text}</p>
                <p className='review-author'>- {review.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <ReviewForm onSubmit={handleSubmitReview} />
      </div>
    </div>
  );
};

export default ReviewCarousel;
