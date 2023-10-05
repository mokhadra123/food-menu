import React from "react";
import { Zoom } from "react-awesome-reveal";
import Item from "../Item/Item";
import "./ItemsContainer.scss";
import { useCategoriesContext } from "../../context/categories";
const ItemsContainer = () => {
  const { itemsData } = useCategoriesContext();
  return (
    <div className="items-container container">
      {itemsData.map((meal) => (
        <Zoom left key={meal.id}>
          <Item meal={meal} />
        </Zoom>
      ))}
    </div>
  );
};

export default ItemsContainer;
