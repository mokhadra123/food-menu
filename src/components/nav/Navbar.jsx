import React, { useState } from "react";
import "./Navbar.scss";
import { useSearchContext } from "../../context/search";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { filterbySearch } = useSearchContext();
  const onSearch = () => {
    filterbySearch(searchValue);
    setSearchValue("");
  };
  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <nav>
      <div className="container nav-container">
        <h2>مطعمك</h2>
        <div className="search-container">
          <input
            type="search"
            placeholder="ابحث..."
            onChange={handleOnChange}
            value={searchValue}
          />
          <button onClick={onSearch}>ابحث</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
