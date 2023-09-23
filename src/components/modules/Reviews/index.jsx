import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';
import ReviewForm from './ReviewForm';
import { SampleNextArrow, SamplePrevArrow } from '../../elements/ArrowButton'

const reviewArr = [
    {
      id: 1,
      text: 'Review 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
    },
    {
      id: 2,
      text: 'Review 2 - Nulla eget felis in ipsum viverra auctor.',
      author: 'Jane Smith',
    },
    {
      id: 3,
      text: 'Review 3 - Sed aliquet ligula id quam tincidunt, at venenatis tortor ultricies.',
      author: 'Alice Johnson',
    },
    {
      id: 4,
      text: 'Review 4 - Fusce bibendum odio ut cursus ullamcorper.',
      author: 'Bob Williams',
    },
    {
      id: 5,
      text: 'Review 5 - Nunc vehicula nisi at sapien ultrices, a laoreet nulla vehicula.',
      author: 'Eva Brown',
    },
    {
      id: 6,
      text: 'Review 6 - Proin euismod massa at quam venenatis, non tristique justo.',
      author: 'Mike Davis',
    },
    {
      id: 7,
      text: 'Review 7 - Vestibulum blandit metus at sem hendrerit dignissim.',
      author: 'Sarah Clark',
    },
    {
      id: 8,
      text: 'Review 8 - Duis eu purus vel enim iaculis viverra.',
      author: 'Tom Moore',
    },
    {
      id: 9,
      text: 'Review 9 - Phasellus quis libero eget odio volutpat facilisis.',
      author: 'Linda Lee',
    },
];
  
const ReviewCarousel = () => {
      
    const [reviews, setReviews] = useState(reviewArr);

    const handleSubmitReview = (newReview) => {
        // Add the new review to the reviews array
        setReviews([...reviews, newReview]);
    };
  
    const sliderRef = useRef(null);
  
    const settings = {
      dots: true, // Remove pagination dots
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true, // Enable automatic sliding
      autoplaySpeed: 3000, // Slide every 2 seconds
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  
    return (
      <div className="review-section" id='reviews'>
        <div className="title">Reviews</div>
        <div className="review-carousel">
          <Slider {...settings} ref={sliderRef}>
            {reviews.map((review) => (
              <div className="review-page">
                <div key={review.id} className="review-item">
                  <p className="review-text">{review.text}</p>
                  <p className="review-author">- {review.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <ReviewForm onSubmit={handleSubmitReview} />
      </div>
    );
  };
  
  export default ReviewCarousel;