import React from "react";
import { useSelector } from "react-redux";

// IMPORT AASSET
import headerBand from "../../Assets/Images/headerBand.png";
import img0 from "../../Assets/Images/img0.png";
import img1 from "../../Assets/Images/img1.png";
import img2 from "../../Assets/Images/img2.png";
import img3 from "../../Assets/Images/img3.png";

import CarouselHome from "./Carousel";

const Homepage = () => {
  const { searchVisible, catOne, catTwo } = useSelector(
    (state) => state.visibility
  );
  const { nameCustomer } = useSelector((state) => state.selectCustomer);
  return (
    <div className={`homepage-wrapper ${searchVisible ? "hidden" : "active"}`}>
      <div>
        <img src={headerBand} alt="home" />
      </div>
      <div>
        <img src={img0} alt="home" />
      </div>
      <div className="carouselHome">
        {nameCustomer ? (
          <h2>
            {nameCustomer}
            's Products
          </h2>
        ) : (
          <h2>Our Gluten Free Products</h2>
        )}
        <CarouselHome />
      </div>
      <div>
        <img src={img1} alt="home" />
      </div>
      <div>
        <img src={img2} alt="home" />
      </div>
      <div>
        <img src={img3} alt="home" />
      </div>
    </div>
  );
};

export default Homepage;
