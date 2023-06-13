import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import SecondaryButton from "./Buttons/SecondaryButton";
import "./Carousel.scss";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="image-wrapper">
        <img
          className="desktop-banner"
          src="https://static-assets-web.flixcart.com/fk-sp-static/images/welcome_potal_banner_Desktop_V2_02.svg"
          alt="banner"
        ></img>
        <img
          className="tablet-banner"
          src="https://static-assets-web.flixcart.com/fk-sp-static/images/Tablet_without_title_02.svg"
          alt="banner"
        ></img>
        <img
          className="mobile-banner"
          src="https://static-assets-web.flixcart.com/fk-sp-static/images/banner_mobile_v2.4.png"
          alt="banner"
        ></img>
      </div>
      <div className="carousel-form">
        <h2 style={{ color: "white" }}>Launch Your Business in 10 Minutes</h2>
        <MobileNumberInput />
        <SecondaryButton>
          Start Selling
          <BsArrowRight size={"20"} />
        </SecondaryButton>
      </div>
    </div>
  );
};

const MobileNumberInput = (props) => {
  return (
    <div className="mobile-number-input">
      <MdPhoneAndroid size={"20"} color="lightgrey" />
      <input type="text" placeholder="Enter 10 digit phone number here" />
    </div>
  );
};

export default Carousel;
