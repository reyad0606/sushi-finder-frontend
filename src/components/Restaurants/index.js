import React from "react";
import { Button } from "../ButtonElement";
import { Link } from "react-router-dom";
import cart from "../../Home";

import {
  ResContainer,
  ResWrapper,
  ResRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./RestaurantElement";

const RestaurantSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const handleClickRestaurant = () => {
    // <Link path={cart} />;
  };
  return (
    <>
      <ResContainer lightBg={lightBg} id={id}>
        <ResWrapper>
          <ResRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    onClick={handleClickRestaurant}
                  >
                    <Link
                      to="/cart"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {buttonLabel}
                    </Link>
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ResRow>
        </ResWrapper>
      </ResContainer>
    </>
  );
};

export default RestaurantSection;
