import React from "react";
import "./Item.scss";
const Item = ({ meal }) => {
  const { id, title, category, price, img, desc } = meal;
  return (
    <div className="item-container " kay={id}>
      <img src={img} alt={title} />
      <div className="content-container">
        <div className="top-content-container">
          <h3>{category}</h3>
          <h5>{price}</h5>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Item;
