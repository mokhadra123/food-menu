import { createContext, useContext, useState } from "react";
import Data from "../data.json";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [itemsData, setItemsData] = useState(Data);

  const allCategory = ["الكل", ...new Set(Data.map((i) => i.category))];

  const filterItems = (cate) => {
    if (cate === "الكل") {
      setItemsData(Data);
    } else {
      const newArray = Data.filter((item) => item.category === cate);
      setItemsData(newArray);
    }
  };

  const value = { allCategory, filterItems, itemsData, setItemsData };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => useContext(CategoriesContext);
