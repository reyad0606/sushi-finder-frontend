import React, { useState, useEffect } from "react";

const Ratings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // Registration Part Handeling

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handleRestaurantInput = (e) => {
    setRestaurant(e.target.value);
  };
  const handleRatingInput = (e) => {
    setRating(e.target.value);
  };
  const handleCommentInput = (e) => {
    setComment(e.target.value);
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    console.log(`Name:${name}, Email: ${email}`);
    fetch("http://localhost:5000/api/ratings", {
      method: "POST",
      body: JSON.stringify({
        name: `"${name}"`,
        email: `"${email}"`,
        restaurant: `"${restaurant}"`,
        rating: `${rating}`,
        comment: `"${comment}"`,
      }),
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("Feedback Successful");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Please try again");
      });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleFeedback}>
        <h1>Loved it ?? let us know!! </h1>
        <label htmlFor="customer">Customer Name : </label>
        <input
          type="text"
          name="customer"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameInput}
        />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailInput}
        />
        <label htmlFor="restaurant">Restaurant Name : </label>
        <input
          type="text"
          name="restaurant"
          placeholder="Enter restaurant name"
          value={restaurant}
          onChange={handleRestaurantInput}
        />
        <label htmlFor="rating">Overall Rating : </label>
        <input
          type="text"
          name="rating"
          placeholder="Enter rating out of 5.0"
          value={rating}
          onChange={handleRatingInput}
        />
        <label htmlFor="comment">Comment : </label>
        <input
          type="text"
          name="comment"
          placeholder="Enter comment"
          value={comment}
          onChange={handleCommentInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Ratings;
