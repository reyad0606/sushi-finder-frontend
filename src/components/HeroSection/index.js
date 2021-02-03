import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import Restaurants from "../Restaurants";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          playbackRate="0.2"
          id="videoBG"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Sushi Finder</HeroH1>
        <HeroP>Made for sushi lovers.</HeroP>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/restaurants"
        >
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <Link
                to="/restaurants"
                style={{ textDecoration: "none", color: "black" }}
              >
                Order Now {hover ? <ArrowForward /> : <ArrowRight />}
              </Link>
            </Button>
          </HeroBtnWrapper>
        </Link>
      </HeroContent>
    </HeroContainer>
  );
};

{
  /* <Link style={{ textDecoration: "none", color: "white" }} to="/restaurants">
  Restaurants
</Link>; */
}

export default HeroSection;

{
  /* <Router>
  <div className='App'>
    <Switch>
      <Route path='/landingPage'>
        <LandingPage />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/checkout'>
        <Header />
        <Checkout />
      </Route>
      <Route path='/'>
        <Header />
        <Home />
      </Route>
    </Switch>
  </div>
</Router>; */
}
