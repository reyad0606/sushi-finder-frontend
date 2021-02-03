import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import RatingRender from "./RatingRender";
import Ratings from "./Ratings";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  const renderRestaurants = useEffect(() => {
    fetch("http://localhost:5000/api/sushibars")
      .then((res) => res.json())
      .then((response) => {
        setRestaurants(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="mainContainer">
      <div className="hometop">
        {restaurants.map(({ title, _id, price, restaurant, rating, image }) => (
          <Product
            key={_id}
            id={_id}
            title={title}
            price={price}
            image={image}
            restaurant={restaurant}
            rating={rating}
          />
        ))}
      </div>
      <div className="customerRating">
        <div className="homeleft">
          <Ratings />
        </div>
        <div className="homeright">
          <RatingRender />
        </div>
      </div>
    </div>
  );
}

export default Home;
