import React from "react";

import './CardShop.scss';

const CardShop = ({ img, title }) => {
  return (
    <div className="cardShop">
      <div className="cardShop_image">
        <img src={img} alt="" />
      </div>

      <div className="cardShop_description">
        <h2> {title} </h2>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CardShop;
