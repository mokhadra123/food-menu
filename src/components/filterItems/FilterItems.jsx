import React from "react";
import "./filterItems.scss";
import { useCategoriesContext } from "../../context/categories";
const FilterItems = () => {
  const { filterItems, allCategory } = useCategoriesContext();
  const handleFilter = (item) => {
    filterItems(item);
  };

  return (
    <div className="filter-items-container">
      <h1 className="title">قائمة الطعام</h1>
      <div className="filtering-items">
        {allCategory.map((item) => {
          return (
            <button
              onClick={() => handleFilter(item)}
              key={item}
              className="filter-item"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterItems;
