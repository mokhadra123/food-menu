import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { CategoriesProvider } from "./context/categories";
import { SearchProvider } from "./context/search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CategoriesProvider>
    <SearchProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SearchProvider>
  </CategoriesProvider>
);
