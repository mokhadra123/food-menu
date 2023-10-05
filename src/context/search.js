import { createContext, useContext } from "react";

import { useCategoriesContext } from "./categories";
import Data from "../data.json";
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { setItemsData } = useCategoriesContext();
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = Data.filter((item) => item.category === word);
      setItemsData(newArr);
    }
  };
  const value = { filterbySearch };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
