import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import SecondaryButton from "./Buttons/SecondaryButton";
import data from "../data.json";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="image-wrapper">
        <img
          className="desktop-banner"
          src={data.landingPage.registerSection.bannerImageSrc}
          alt={data.landingPage.registerSection.bannerImageAlt}
        ></img>
        <img
          className="tablet-banner"
          src={data.landingPage.registerSection.tabletBannerImageSrc}
          alt={data.landingPage.registerSection.tabletBannerImageAlt}
        ></img>
        <img
          className="mobile-banner"
          src={data.landingPage.registerSection.mobileBannerImageSrc}
          alt={data.landingPage.registerSection.mobileBannerImageAlt}
        ></img>
      </div>
      <div className="banner-form">
        <h1 className="banner-heading">Sell Online to 50 crores+ customers</h1>
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

export default Banner;
