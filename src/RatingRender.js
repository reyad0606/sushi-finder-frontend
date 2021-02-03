import React, { useState, useEffect } from "react";
import "./RatingRender.css";

const RatingRender = () => {
  const [comments, setComments] = useState([]);

  const renderComments = useEffect(() => {
    fetch("http://localhost:5000/api/ratings")
      .then((res) => res.json())
      .then((response) => {
        setComments(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="mContainer">
      {comments.map(({ _id, name, comment, rating, restaurant }) => (
        <div key={_id} className="comments">
          <h3 className="comments__info">Customer Name : {name}</h3>
          <h4 className="comments__info">Restaurant : {restaurant}</h4>
          <h5 className="comments__rating">Rating : {rating}</h5>
          <h4 className="comments__info">{comment}</h4>
        </div>
      ))}
    </div>
  );
};

export default RatingRender;
