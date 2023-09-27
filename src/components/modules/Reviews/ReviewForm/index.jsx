import React, { useState } from "react";
import "./index.scss";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className='review-form'>
      <h2 title="Queries">
        If you have any query, please reach out to us with your message and
        we'll get back to you.
      </h2>
      <form
        action='https://formsubmit.co/kishlay111197@gmail.com'
        onSubmit={handleSubmit}
        method='POST'
      >
        <div className='form-group'>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Message:
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <input type='hidden' name='_captcha' value='false'></input>
        <input
          type='hidden'
          name='_autoresponse'
          value="Thanks for contacting Sensa. We'll get it touch soon!"
        ></input>
        <input
          type='hidden'
          name='_next'
          value='https://sensafoods.co.in'
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
