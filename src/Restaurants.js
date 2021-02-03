import React, { useState } from "react";
import RestaurantSection from "./components/Restaurants";
import Footer from "./components/Footer";
import {
  resObjOne,
  resObjTwo,
  resObjThree,
  resObjFour,
  resObjFive,
} from "./components/Restaurants/Data";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./Restaurants.css";
import VideoRestaurants from "./components/VideoRestaurants";

function RestaurantsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="landingPage">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <VideoRestaurants />
      <RestaurantSection {...resObjOne} />
      <RestaurantSection {...resObjTwo} />
      <RestaurantSection {...resObjThree} />
      <RestaurantSection {...resObjFour} />
      <RestaurantSection {...resObjFive} />

      <Services />

      <Footer />
    </div>
  );
}

export default RestaurantsPage;
