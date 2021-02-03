import React, { useState } from "react";
import Video from "../../videos/video1.mp4";
import { Button } from "../ButtonElement";
import Home from "../../Home";
import Checkout from "../../Checkout";
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
} from "./VideoElements";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ArrowDownward } from "@material-ui/icons";

const VideoRestaurants = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          id="videoBG"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Sushibars</HeroH1>
        <HeroP>
          Findout the best restaurants reserved only for SUSHI LOVERS
        </HeroP>
        <HeroBtnWrapper>
          <Route path="/">
            <Button
              // to='/'
              onClick={() => Checkout.push("../../Checkout")}
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
              {hover ? <ArrowDownward /> : <ArrowDownward />}
            </Button>
          </Route>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default VideoRestaurants;

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
