import React, { useEffect } from "react";
import Carousel from "../Components/Carousel";
import data from "../data.json";
import Testimonial from "../Components/Testimonial";
import InfoTab from "../Components/InfoTab";

import "./LandingPage.scss";
import NavBar from "../Components/NavBar";

const LandingPage = (props) => {
  const testimonials = data.landingPage.testimonials;

  useEffect(() => {
    document.title = "Sell On Flipkart";
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className="main-page">
        <Carousel />
        <Testimonial testimonials={testimonials} />
        <InfoTab />
      </div>
      {/* <div className="content-section">
        <article>
          <img src="" alt="product-image" />
        </article>
        <section>
          <span title="item-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel cumque
            sint sequi molestias quas eum praesentium error qui exercitationem
            ipsam eveniet placeat mollitia rem quasi, atque alias sed
            perferendis at repellat officiis impedit quod eius voluptates!
            Deserunt totam beatae quae harum! Natus porro dolor repellendus amet
            molestiae placeat cumque, provident cupiditate inventore sunt
            impedit consequatur maxime eum minima recusandae voluptatem atque
            sapiente ab! Ut repellendus accusantium, quia ipsum deserunt at
            magnam officiis iste ab molestiae delectus. Exercitationem rerum at
            dolor recusandae consequatur laboriosam labore accusantium
            perspiciatis, similique nam, aspernatur, natus aperiam reprehenderit
            ab consectetur! Minus libero error modi quae aut?
          </span>
        </section>
      </div> */}
      <footer>
        <div></div>
      </footer>
    </div>
  );
};

export default LandingPage;
