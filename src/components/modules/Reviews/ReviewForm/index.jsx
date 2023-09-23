import React, { useState } from "react";
import "./index.scss";

const ReviewForm = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviewAuthor, setReviewAuthor] = useState("");

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleReviewAuthorChange = (e) => {
    setReviewAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new review object
    const newReview = {
      text: reviewText,
      author: reviewAuthor,
    };
    // Call the onSubmit function to submit the review
    onSubmit(newReview);
    // Clear the form fields
    setReviewText("");
    setReviewAuthor("");
  };

  return (
    <div className='review-form'>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='reviewText'>Review:</label>
          <textarea
            id='reviewText'
            name='reviewText'
            value={reviewText}
            onChange={handleReviewTextChange}
            required
          ></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='reviewAuthor'>Your Name:</label>
          <input
            type='text'
            id='reviewAuthor'
            name='reviewAuthor'
            value={reviewAuthor}
            onChange={handleReviewAuthorChange}
            required
          />
        </div>
        <button type='submit'>Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
